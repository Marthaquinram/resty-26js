# Component Based UI

# Lab 29
RESTy Phase 4: Track History
In phase 4, we will be tracking every API call and storing it in history

The following user stories detail the major functionality for this phase of the project.

  - As a user, I want to see a list of my previous API calls, so that I can see the results again, quickly

Application Flow:

  - User enters an API URL
  - Chooses a REST Method
  - Clicks the “Go” button
  - Application fetches data from the URL given, with the method specified
  - Application stores the API request and returned data into state
    - Updates the list of previous API calls
  - Application Displays the response headers and results separately
    - Both headers and results should be “pretty printed” JSON

# Technical Requirements / Note
Refactor your state management within the App component to use the useReducer hook.

1. Replace any component state managements to use derived state from useReducer with a reducer function and intitial state.

Suggested approach

- < App />: Use a reducer to store and manage all application state: loading, results, history
  - Add to history array in state after every api call
    - method, url, results (json)
- < History />: Iterates the history array in state and shows the previous API calls
- When one is clicked on, show the results in the results component
  - Note: the results component renders whatever is in state …

## Deployment

Deploy your application to GitHub pages using a GitHub action which will publish the “build” to the gh-pages branch of your repository on all check-ins


## Deployment Links
- Lab 29
  - Deploy link here:

## UML
- Lab29-UML
  - 

# PR
*(Do NOT merge to main and Keep submission branch PR open in case of resubmit)*
- Lab 29
  - PR Link

### Collaborators

-
