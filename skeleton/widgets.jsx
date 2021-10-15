import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';

const Root = (props) => { return <div ><Clock /></div> };

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // root.append(Root);
  ReactDOM.render(<Root />, root);
});

