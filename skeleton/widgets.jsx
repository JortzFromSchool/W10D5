import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';

const Root = (props) => { return <div >Working</div> };

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // root.append(Root);
  ReactDOM.render(<Root />, root);
});

