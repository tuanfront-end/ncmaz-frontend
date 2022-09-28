import React, { Suspense } from "react";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createRoot } from "react-dom/client";
import App from "./App";

// JS DOM FUNCTIONALITY
import "./SomeCustomJsDOM";
import "./HeaderSite";
import "./HeaderSingle";
//
import "./index.css";
import "./styles/index.scss";
import "react-loading-skeleton/dist/skeleton.css";
import "@glidejs/glide/dist/css/glide.core.min.css";

if (!location.pathname.includes("/wp-admin/")) {
  const container = document.getElementById("root") as HTMLElement;
  const root = createRoot(container);
  //
  root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div />}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
    // </React.StrictMode>
  );
}
