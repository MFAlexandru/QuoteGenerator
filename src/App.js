import React from "react";

import "./App.css";

import { connect } from "react-redux"

import {
  nextQuote
} from "./redux/Quoter/quoter.actions"

import data from "./data/quotes.json"

function App(props) {
  return (
    <div id = "quote-box" className = "App">
      <p id = "text">{data.quotes[props.count].quote}</p>
      <p id = "author">{data.quotes[props.count].author}</p>
      <button onClick = {() => props.increaseCounter()}>Next Quote</button>
      <a id = "tweet-quote" target = "_blank" href = {"https://twitter.com/intent/tweet/?text=".concat(data.quotes[props.count].quote, "%0A%0A-", data.quotes[props.count].author)}>Tweet</a>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.index.count,
    maxlen: state.index.maxlen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(nextQuote()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);