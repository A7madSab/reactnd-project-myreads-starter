# MyReads Project

This is the assessment project for Udacity's React Fundamentals course.

## What is MyReads (Project Description)

It is react app that _manages_ books and sorts them into one of three categories:

- Currently Reading
- Want to Read
- Read

## How it works

The App is broken down into three components

├── App
   ├── BookList
   └── SearchPage

The app's main activities is in `BookList Component` where the API which is made using Nodejs is used to fetch data from the backend

**create-react-app:** I haven't used this command, instead I used git fork and clone to work on the project from my local machine.

**Nodejs:** already implemented (APIs).

**Reactjs:** Front-end framework used to create this single page application.

**React Router:** used to navigate between the two components `SearchPage` & `BookList`

**prop-types:** used for maintainablility, it identifies all needed props.

**Bootstrap:** Css library

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BooksList.js # Books listing component.
    ├── BooksAPI.js #Books searchin component.
    ├── Books.js # This is the Book Component.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
