import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

const tab1 = {title: "first", content:"this is the first tab"};
const tab2 = {title: "second", content:"this is the second tab"};
const tab3 = {title: "third", content:"this is the third tab"};

const tabs = [tab1, tab2, tab3];

const Root = (props) => {
  return (
  <div>
      <Clock />
      <Tabs tabs={props.tabs} />
  </div>) };

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // root.append(Root);
  ReactDOM.render(<Root tabs={tabs} />, root);
});

