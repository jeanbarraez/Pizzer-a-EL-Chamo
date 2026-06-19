import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TransportContextProvider from "./context/TransportContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransportContextProvider>
     <App />
    </TransportContextProvider>
  </React.StrictMode>
)
