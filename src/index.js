import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./utils/context";
import { ApiProvider } from "./utils/apiContext";

import ReactGA from "react-ga4";
ReactGA.initialize("G-ZXRZMECQH4");

ReactGA.send({ hitType: "pageview", page: window.location.pathname });

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </AppProvider>
    <ToastContainer />
  </React.StrictMode>
);
