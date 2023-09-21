import React from "react";
import ReactDOM from "react-dom/client";
import App from "./componennts/App";
import { WidthProvider } from "./componennts/WidthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WidthProvider>
      <App />
    </WidthProvider>
  </React.StrictMode>
);
