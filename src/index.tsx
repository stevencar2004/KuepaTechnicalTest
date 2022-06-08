import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "./context/Provider";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);
