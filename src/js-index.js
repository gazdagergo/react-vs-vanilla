function jsApp(content, root) {
  const span = document.createElement("SPAN");
  const text = document.createTextNode(content);
  span.appendChild(text);
  root.appendChild(span);
}

const jsRootElement = document.getElementById("js-root");
jsApp("hello js", jsRootElement);
