import "@/styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store } from "./app/store.ts";
import { Toaster } from "./components/ui/toaster.tsx";
import { Context } from "./context/Context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Context>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </Context>
  </React.StrictMode>
);
