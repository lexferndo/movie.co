import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import AnimeContextProvider from "./context/AnimeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimeContextProvider>
      <App />
    </AnimeContextProvider>
  </React.StrictMode>
);
