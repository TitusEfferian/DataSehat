import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { buttonPlusClicked } from "../src/redux/actions/buttonClicked";
import { Provider } from "react-redux";
import Main from './Main';


class App extends Component {

  render() {
    return (
      <Main></Main>
    );
  }
}



export default App;
