import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { WidthProvider } from "./components/WidthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WidthProvider>
      <App />
    </WidthProvider>
  </React.StrictMode>
);
