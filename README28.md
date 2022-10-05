# Component Based UI

# Lab 28
RESTy Phase 3: Connect RESTy with APIs, running live requests

In phase 3, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests
The following user stories detail the major functionality for this phase of the project.

  - As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
  - As a user, I want to see the results returned from an API request in my browser in a readable format

Application Flow:

  - User enters an API URL
  - Chooses a REST Method
  - Clicks the “Go” button
  - Application fetches data from the URL given, with the method specified
  - Displays the response headers and results separately
  - Both headers and results should be “pretty printed” JSON

## Technical Requirements / Note
Extend your application to include the ability to send http requests and display response data, when the Form experiences a submission event.

1. Refactor application methods to allow for browser side HTTP requests to be sent.
  - Your implementation should allow the user to set a url, method, and request body.
2. Make sure all relavent request and response data is displayed to the User.

Suggested approach

  - < Form /> component, onSubmit() sends the user’s entries to the < App /> via method sent in through props
  - < App /> does a check on the request data from the form and updates the request variable in state with the url, method, and potentially the body
  - < App /> has an effect hook that’s looking for changes to the request variable in state, and in response, runs the API request with the new request options from state
  - < App /> updates state with the results of the API Request
  - < Results /> sees the new API data as a prop and renders the JSON

*Note: update your < Results /> component to use a 3rd party component to “pretty print” the JSON in a color-coded, user-friendly format*

## Deployment
Deploy your application to GitHub pages using a GitHub action which will publish the “build” to the gh-pages branch of your repository on all check-ins

## Deployment Links
- Lab 28
  - Deploy link here:

## UML
- Lab28-UML
  - 

# PR
*(Do NOT merge to main and Keep submission branch PR open in case of resubmit)*
- Lab 28
  - PR Link

### Collaborators

-
