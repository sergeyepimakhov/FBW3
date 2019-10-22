// render plain text
ReactDOM.render(
  <h1>Render using plain Text!</h1>,
  document.getElementById('plain')
); 

// render component
class MyComponent extends React.Component {  
  render() {  
      return <h1>Render using Component!</h1>;  
  }  
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('component')
); 
