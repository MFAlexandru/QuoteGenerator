import React from "react";

import "./App.css";

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter
} from "./redux/Counter/counter.actions"

function App(props) {
  return (
    <div id = "quote-box" className = "App">
      <p id = "text">Some quote!</p>
      <p id = "author">The Author!</p>
      <button onClick = {() => props.increaseCounter()}>Next Quote</button>
      <a id = "tweet-quote" target = "_blank" href = "https://twitter.com/intent/tweet">Tweet it</a>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);