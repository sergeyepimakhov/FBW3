# React and Redux

Redux solves the nightmare of states in React

## Basic components

Redux has the following basic components:

- Actions 
- Reudcers
- Store

The basic idea is `One App - One Store - One State`

## What is the Store

- Store holds states of the application
- Store is an object
- An application should have only on Store (as a rule)

## What are Actions

Actions are plain JS-Objects that describe WHAT happened, but don't describe
HOW the app state changes

```javascript
function addNoe(title, content) {
    return {
            type: ADD_ARTICLE,
            payload: { title: title, content: content }
    }   
}
```

## Reducers

Reducers are pure functions that define HOW the app state changes.

Reducers take two arguments: the previous app state, the action 
being dispatched and return the new app state. 

## Example

Considering a click "Add Note":

1. The button click dispatches an action to the store with the method
`store.dispatch()`.

2. Redux passes down the action to the reducer

3. The store saves the new state returned by the reducer

4. App will be updated

