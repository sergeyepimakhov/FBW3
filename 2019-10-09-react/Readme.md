# React

## MVC

M-Model
V-View
C-Controller

## Short Overview

React was build for single-page web applications. Made by Facebook and now became a very popular JS framework. 
React can create reusable elements and can change date without reloading the page. React stands for 'Model' in MVC.

Is uses JSX. JSX is simple JavaScript which allows HTML quoting.

“Properties flow down; actions flow up”. On page React changes only those components where it necessary, not the whole page.

## So why React among them?

- Simplicity. Clear structure and life-cycle.
- Easy to learn. Anyone with a basic JS knowledge can easily understand React.
- Native Approach. At the same time it can make IOS, Android and Web applications
- Data binding.
- Performance. 
- Testability. Super easy to test. 

## Let's start

https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment

    npx create-react-app my-app
    cd my-app
    npm start

## Simple app

https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment

    npx create-react-app my-app-lab
    
Start the development server

    npm start

Build the app into static files

    npm run build 

## Lab Remarks

Rename ```index.js``` to ```index.jsx``` (or better ```App.js``` to ```App.jsx```) through that one can highlight React in VisualCode.

Add React to an existing Web Application

https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx

A good explanation about generated structure can be found here:

https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-1-a12e1833fdc

Props are like HTML-attributes



Introduction: Routing in a Single Page Application
"3rd party component libraries:
- Container components (manage state) vs. Display components (render dom)
- Display component libraries: reactstrap (documentation and simple example)
- Container components: react-router-dom (documentation)"