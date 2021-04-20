import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/*
  JSX is not mandatory for writing React.
  under the hood, it is running createElement, which takes the tag,
  object containing properties, and children of the component, 
  and renders the same information.

  const heading = React.createElement('h1', {className: 'site-heading'},
  'Hello, React!');

  JSX pointers
  className is used instead of class for adding CSS classes, as class
  is a reserved keyword in Javascript
  Properties and methods in JSX are camelCase - onclick will become onClick
  Self-closing tags must end in a slash e.g. <img />

  const name = 'Tania';
  const heading = <h1>Hello, {name}</h1>;

  Components
  Class components or simple components - React apps have small components,
  which loads into the main App component. Components get their own file.
*/

ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
