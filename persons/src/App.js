import React, {Component} from 'react';
import RouterComponent from './RouterComponent';
import {View, Text} from 'react-native'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers';

console.disableYellowBox = true;

class App extends Component{

  render(){
    return(
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent />
    </Provider>
    )
  }
}

export default App;
