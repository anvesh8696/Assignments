import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
      apiKey: "xxxxx",
      authDomain: "xxxx",
      databaseURL: "xx",
      storageBucket: "xxx",
      messagingSenderId: "xxx"
    };
    firebase.initializeApp(config);
    
ReactDOM.render(
  <App />,
  document.getElementById('root-app')
);

