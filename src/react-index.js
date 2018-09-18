import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

const Colorize = ({ children, color }) => {
  return <span style={{ color }}>{children}</span>;
};

const App = ({ content }) => {
  return (
    <h1>
      <Colorize color="red">
        <span>{content}</span>
      </Colorize>
    </h1>
  );
};

const reactRoot = document.getElementById("react-root");
ReactDom.render(<App content="hello react" />, reactRoot);
