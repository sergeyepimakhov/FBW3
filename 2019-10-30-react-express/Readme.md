# React and Express

## Create a React App

```bash
npx create-react-app client
cd client
npm start
```

It will run on localhost:3000

## Create an Express App

```bash
npx express-generator server
cd server
npm install
DEBUG=server:* npm start
```

Open in browser localhost:3000 and see the Welcome Page of Express

### Port

Since they are both are using the same port 3000 let's change it to 9000 for Express:

```bash
cd bin
nano www
# var port = normalizePort(process.env.PORT || '9000');
```

### Routes

1. On ```server/routes``` create ```joke.js```
2. On the ```server/app.js```insert a new route:

```javascript
...
var jokeRouter = require('./routes/joke');
...
app.use('/joke', jokeRouter);
```

Now browse ```http://localhost:9000/joke````

## Connect Client and Server

We will use Fetch API to retrieve the data from server.

On ```client/src/App.js```.

0. 

    import React, { Component } from 'react';

1. Function App to Class:

```javascript
class App extends Component
```

2. Call API
```javascript
constructor(props) {
    super(props);
    this.state = { response: "" };
}

callAPI() {
    fetch("http://localhost:9000/joke")
        .then(res => res.text())
        .then(res => this.setState({ response: res }));
}

componentWillMount() {
    this.callAPI();
}
```

3. return -> render() return

4. Add a tag for rendering

```javascript
<p className="App-intro">;{this.state.response}</p>
```

It will still not work because of CORS

### CORS

On server

    npm install --save cors

Line 6 of app.js

    var cors = requere("cors");

Line 18

    app.use(cors());


## Cowsay

1. Install fortune
2. Create array of quotes
3. Choose randomly a joke
4. Return back by pressing a form with button 

Might be useful:

    npm install --save child_process

    https://nodejs.org/docs/v8.1.4/api/child_process.html#child_process_child_process_exec_command_options_callback
