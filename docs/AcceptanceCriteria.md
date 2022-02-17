# Budget_Anywhere



Video of app in action:


GET routes to return all: 1. categories 2. products, 3. tags

![](budget_anywhere-mockup.PNG)



## User Story
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 


## Acceptance Criteria

- [x]    GIVEN a budget tracker without an internet connection
        WHEN the user inputs an expense or deposit
        THEN they will receive a notification that they have added an expense or deposit

- [x]    WHEN the user reestablishes an internet connection
        THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated


## Getting Started:


- [x]    Use IndexedDB to add offline functionality
        (review 18.4 lesson)

- [x]    Add a service worker
        (review 19.4 lesson)

- [x]    idb.js added to `public/js/`   
            
- [x]    Add service worker to the route of the `public/` directory

## Once you updated the app it should:

- [x]    Deposit while offline

- [x]    Enter expenses offline

- [x]    offline entries added once the app is brought online


## Web Manifest

- [x]    mobile first app so include a (manually made) manifest.json which includes:

- [x]    name  

- [x]    short_name

- [x]    icons

- [x]    theme_color

- [x]    background_color

- [x]    start_url

- [x]    display

- [x]    Add manifest.json to the root directory of the `public/` directory
        (review 19.5 Lesson)

## Deploy to Heroku

- []    MongoDB Atlas (review 18.5 Lesson)

- []    Add Mongoose Validation



## Grading Requirements

- [] This Challenge is graded based on the following criteria:



## Technical Acceptance Criteria: 40%
- [x]    Includes Service Worker

- [x]    Includes Web Manifest

- [x]    IndexedDB for offline functionality

- []   Deployed to Heroku

## Deployment: 32%

- []    Application deployed at live URL

- []    Application loads with no errors

- []    Application Github URL Submitted

- []    Github Repository contains application code



## Application Quality: 15%
- []    User experience is intuitive and easy to navigate.


## Repository Quality: 13%
- [x]    Repository has a unique name.

- [x]    Repository follows best practices for file structure and naming conventions.

- [x]    Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- [x]    Repository contains multiple descriptive commit messages.

- []    Repository contains quality README file with description, screenshot, and link to deployed application.




## How to Submit the Challenge
- [x]    You are required to submit BOTH of the following for review:

- []    The URL of the functional deployed application

- []    The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.