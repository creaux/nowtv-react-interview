# NowTV React Interview

![NowTV](./logo.png)

A simple React + Redux project to retrieve, render and manipulate data returned from an API.

## Commands

- **npm start**: Runs the web application in developer mode
- **npm test**: Executes Jest tests that have the `.test.js` extension

## Tasks

Feel free to create new files to help you complete these tasks. Additional dependencies can be installed, if you think they are necessary

`App.js` is your react entry point, it is connected to the redux store

`data.js` is a mocked-API which exposes methods to get message information and member information from a chatroom.

It has two publically exposed functions `getMessages` and `getMembers`. Your tasks will be to add further logic to display and manipulate the data returned from these functions, without modifying `data.js`

`service.js` currently consumes `data.js` to retrieve a list of messages, and put them into the redux store. 

Do not modify `data.js` to achieve these tasks, and do not worry about the styling. Code addition should be unit tested.

1. Render the list of messages from the redux store

2. Display the user's email when you hover over the message.

3. Display the avatar of the user next to the message

4. Display and format the timestamp of the message to be human readable

5. Sort the messages by time

## Submission

Please upload your solution to your github account as a public repository, and send the URL to us.
