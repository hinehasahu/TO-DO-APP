import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import { fetchStore } from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={fetchStore}>
      <App /> 
    </Provider>
  </BrowserRouter>
);
