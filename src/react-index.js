import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

const App = ({ content }) => <span>{content}</span>;

const reactRoot = document.getElementById("react-root");
ReactDom.render(<App content="hello react" />, reactRoot);
