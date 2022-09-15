import React from "react";
import App from "./App";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { createRoot } from "react-dom/client";
import { RetryLink } from "@apollo/client/link/retry";

// JS DOM FUNCTIONALITY
import "./SomeCustomJsDOM";
import "./HeaderSite";
import "./HeaderSingle";
//
import "./index.css";
import "./styles/index.scss";
import "react-loading-skeleton/dist/skeleton.css";
import "@glidejs/glide/dist/css/glide.core.min.css";

if (
  window.frontendObject?.graphQLBasePath &&
  !location.pathname.includes("/wp-admin/")
) {
  const cache = new InMemoryCache({
    // typePolicies: {
    //   Post: {
    //     keyFields: [
    //       "ncmazVideoUrl",
    //       "ncmazAudioUrl",
    //       "ncPostMetaData",
    //       "ncmazGalleryImgs",
    //     ],
    //   },
    //   // VI TRONG 1 Trang thuong chi co 1 section user
    //   User: {
    //     keyFields: ["ncUserMeta"],
    //   },
    //   Category: {
    //     keyFields: ["ncTaxonomyMeta"],
    //   },
    //   Tag: {
    //     keyFields: ["ncTaxonomyMeta"],
    //   },
    // },
  });

  const link = new RetryLink();

  const httpLink = new HttpLink({
    uri: window.frontendObject.graphQLBasePath,
  });

  const client = new ApolloClient({
    uri: window.frontendObject.graphQLBasePath,
    cache,
    link: from([link, httpLink]),
  });

  const container = document.getElementById("root") as HTMLElement;
  const root = createRoot(container);
  //
  root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </PersistGate>
    </Provider>
    // </React.StrictMode>
  );
}
