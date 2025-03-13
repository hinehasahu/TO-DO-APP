import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Provider} from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Store } from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);
