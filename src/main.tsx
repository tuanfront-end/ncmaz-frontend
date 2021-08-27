import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";
import "./styles/index.scss";

declare global {
  var frontendObject: {
    restUrl: string;
    ajaxurl: string;
    stylesheetDirectory: string;
    placeholderImg: string;
    graphQLBasePath: string;
  };
}

const client = new ApolloClient({
  uri: window.frontendObject.graphQLBasePath,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
