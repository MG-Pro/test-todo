import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import List from './components/List';
import About from './components/About';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import rootReducer from './store/reducers'

const initialState = {};

const args = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
]
  .filter((item => item));

const store = createStore(
  rootReducer,
  initialState,
  compose(...args)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={List}/>
              <Route exact path='/about' component={About}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
