import React from "react"; // give me access to React,
// which is installed in our dependencies library

import ReactDOM from "react-dom"; // L220: give access to ReactDOM

// Create a new component. This component should produce
// some HTML. NOTE: const is an ES6 or ES2016 syntax
const App = function() {
  return <div>Hi!</div>; // this HTML stuff is called JSX
};

// Take this component's generated HTML and put it
// on the page (in the DOM))

// L219: Try out with a wrong set of codes
ReactDOM.render(App); // ask react to render App
