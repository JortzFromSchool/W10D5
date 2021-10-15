import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

const Root = (props) => {
  return (
  <div>
      <Clock />
      <Tabs />
  </div>) };

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // root.append(Root);
  ReactDOM.render(<Root />, root);
});

