import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import MyComponent from './MyComponent';

const name = "DCI"

ReactDOM.render(
    <h1>Hello React!</h1>,
    document.getElementById('plain')
  );

ReactDOM.render(
  <h1>Hello {name}</h1>,
  document.getElementById('plain-name')
);

ReactDOM.render(<App />, document.getElementById('function-export'));

ReactDOM.render(<MyComponent />, document.getElementById('component'));

function tick() {
  const element = (
    <div>
      <h2>It is now {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('timer'));
}

setInterval(tick, 500);


// using props
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// this is same as
// class X extends React.Component
// Welcome should be the same as function Welcome 
const element = <Welcome name="Sara" />; // name attribute == props.name
ReactDOM.render(
  element,
  document.getElementById('props')
);

const obj = {name: "Sara"};
ReactDOM.render(
  <Welcome name={obj.name} />,
  document.getElementById('props-2')
);


/// props
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
const props = {name: "Class React.Component"};
ReactDOM.render(
  <WelcomeClass name={props.name} />,
  document.getElementById('props-3')
);


/// multiple welcoms
function App2() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
ReactDOM.render(
  <App2 />,
  document.getElementById('app-2')
);

// comments
function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('comment')
);

////////// states /////////
// using states instead of props
class Clock extends React.Component {
  // initial state 
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // life circle methods
  // set up
  // this conde runs if the dom is rendered
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log("Timer with ID: " + this.timerID);
  }

  // clean up
  componentWillUnmount() {
    console.log("Clean up the timer")
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date() // this is wrong: this.state.date = new Date();
    });
  }

  // how to use callbacks to avoid async

  // Correct
//this.setState((state, props) => ({
//  counter: state.counter + props.increment
//}));

  
  // usual render
  render() {
    return (
      <div>
        <h1>Hello life circle!</h1>
        <h2>It is now {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('states')
);

// buttons, change state
class Toggle extends React.Component {
  // initial state
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('toggle')
);
