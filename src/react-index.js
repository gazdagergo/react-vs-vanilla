import React from "react";
import ReactDom from "react-dom";

const app = function(content) {
  return <span>{content}</span>;
};

const reactRoot = document.getElementById("react-root");
ReactDom.render(app("hello react"), reactRoot);
