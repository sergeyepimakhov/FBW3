# React Redux

1. Create React App

    npx create-react-app <project-name>

2. Install React Redux

    npm install redux
    npm install react-redux

3. Create component `A` under `components/`

4. Clear `App.css`

5. A simple `App.js` with the component `A`:

```jsx
import React from 'react';
import './App.css';
import A from './components/A';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Demo</h1>
        <A />
      </div>
    );
  }
}

export default App;
```

6. Create `reducer.js`:

```jsx
const initialState = {
    x: 0,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT_X':
            return {
                ...state,
                x: state.x + 1
            }
        default:
            return state;
    }
}
```

7. Modify `index.js`:

```jsx
//...
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//...
```

8. Start the app:

    npm start