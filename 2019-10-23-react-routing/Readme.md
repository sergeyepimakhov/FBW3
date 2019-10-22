# React Routing

https://reacttraining.com/react-router/web/guides/quick-start

## Nice Tutorial

https://codeburst.io/getting-started-with-react-router-5c978f70df91

## Basic Routing

    npx create-react-app demo-routing
    cd demo-routing
    npm start

## Install Routing

    npm install react-router-dom
    npm start

Let's play around

```html
<div>
    <h2>Home</h2>
    <p>Some info about Home</p>
</div>
```

    about -> aboutme
    About -> About Me

Add additional routing

App.css:

Horizontal Bar 

```css
    ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
```

## Nested Routing

This example shows how nested routing works. The route /topics loads the Topics component, which renders any further <Route>'s conditionally on the paths :id value.


## Exercises 

1. Style topnav
2. Style nested nav
