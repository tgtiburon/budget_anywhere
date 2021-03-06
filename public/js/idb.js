// create a variable to hold the db connection
let db;


// establish a connection to the IndexedDB database called  budget_anywhere and set it to version 1
// request will act as a listener, will open the connection using indexedDB.open()
const request = indexedDB.open('budget_anywhere', 1);

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2 etc )
request.onupgradeneeded = function(event) {
    // save a reference to the db
    const db = event.target.result;
    // create an object store (table) called 'new_pizza', set it to have an autoincrementing primary key
    // of sorts. 
    db.createObjectStore('new_transaction', { autoIncrement: true });
};

// upon a sucessful
request.onsuccess = function(event) {
    // when db is successfully create with its object store (from onupgradeneeded) or
    // simply establishing a connection, save reference to db in global variable
    db = event.target.result;

    //check if app is online, if yes run uploadPizza() function to send all
    // local db to api
    if (navigator.onLine) {
        // we have not created this yet.
        // We came backonline...lets upload indexedDB transactions
         uploadTransaction();
    }

};



request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode) ;
};


// this function will be executed if we attempt to submit a new budgetItem  and there no 
// internet connection
function saveRecord(record) {
    console.log('Transaction Added to IndexedDB');
    // open a new transaction with the database with read and write permissions
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    // access the object store for `new pizza`
    const transactionObjectStore = transaction.objectStore('new_transaction');

    // add record to your store with the add method
    transactionObjectStore.add(record);
  
};



function uploadTransaction() {
    // open a transaction on your db
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    // access your object store
    const transactionObjectStore = transaction.objectStore('new_transaction');

    // get all records from the store and set to a variable
    const getAll = transactionObjectStore.getAll();

    // upon a successful .getAll() execution, run this function
    getAll.onsuccess = function() {
        // if there was data in indexedDb's store, lets send it to the api server
        if(getAll.result.length > 0) {
            fetch('/api/transaction', {
                method: 'POST',
                // getAll.result contains everything stored in the indexedDb 
                // Mongoose can handle a single object or an array at once
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(serverResponse => {
                    if(serverResponse.message) {
                        throw new Error(serverResponse);
                    }
                    // open one more transaction
                    const transaction = db.transaction(['new_transaction'], 'readwrite');
                    // access the new_transaction object store
                    const transactionObjectStore = transaction.objectStore('new_transaction');
                    // clear all items in your store
                    transactionObjectStore.clear();

                    alert('All saved transactions have been submitted!');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

};


// Listen for an app coming back online
window.addEventListener('online', uploadTransaction);
