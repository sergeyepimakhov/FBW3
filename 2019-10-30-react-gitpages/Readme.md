# Deploy React to GitHub Pages

## A classical React App
Based on this https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

1. Install appropriate gh package:

    npm install gh-pages --save-dev

2. On ```package.json```:

```json
"homepage": "http://yourname.github.io/my-repo"
//...

"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```

3. From the command line:

    npm run deploy

## An App with routing

Based on https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2

1. Install routing

    npm install react-router-dom

2. On ```App.js````:

```jsx
// App.js
render() {
 return (
  <HashRouter basename='/'>
   <div>
    <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/about">About</Link></li>
    </ul>
    <hr />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
   </div>
  </HashRouter>
 );
}
```

And these views:

```jsx
const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>
```

## Exercise

1. About Author
2. Home with smth.

List of react examples:

https://reactjs.org/community/examples.html

How to build calculator:

https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd

Code Pen:

https://codepen.io/mjijackson/pen/xOzyGX

Or here:

https://dev.to/kris/create-a-simple-calculator-app-in-react-2o99
