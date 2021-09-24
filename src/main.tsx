import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import "./index.css";
import "./styles/index.scss";

interface User {
  avatar: {
    url: string;
  };
  databaseId: number;
  email: string;
  name: string;
  ncUserMeta: {
    color: string;
    ncBio: string;
    featuredImage?: {
      sourceUrl: string;
    };
  };
  registeredDate: string;
  slug: string;
  uri: string;
  url: string;
  userId: number;
  username: string;
  nicename: string;
  nickname: string;
  locale: string;
}

declare global {
  // ON FAVORITES PLUGIN
  // NEED UPDATE WHEN UPDATE PLUGIN
  var jQuery: any;
  var Favorites: {
    userFavorites?: [
      {
        groups: any;
        posts?: Record<number, any>;
        site_id: number;
      }
    ];
  };
  //
  var DATE_I18N: any;
  //
  var frontendObject: {
    restUrl: string;
    ajaxurl: string;
    stylesheetDirectory: string;
    placeholderImg: string;
    graphQLBasePath: string;
    homeURL: string;
    frontendTranslate: Record<string, string>;
    currentUser?: User;
    currentObject: {
      id: number;
    };
    allSettings?: {
      discussionSettingsDefaultCommentStatus: string;
      discussionSettingsDefaultPingStatus: string;
      generalSettingsDateFormat: string;
      generalSettingsDescription: string;
      generalSettingsEmail: string;
      generalSettingsLanguage: string;
      generalSettingsStartOfWeek: number;
      generalSettingsTimeFormat: string;
      generalSettingsTimezone: string;
      generalSettingsTitle: string;
      generalSettingsUrl: string;
      readingSettingsPostsPerPage: number;
      writingSettingsDefaultCategory: number;
      writingSettingsDefaultPostFormat: string;
      writingSettingsUseSmilies: boolean;
    };
  };

  var ncmazFrontendVariables: {
    emptyStatePng: string;
  };
}

if (
  window.frontendObject?.graphQLBasePath &&
  !location.pathname.includes("/wp-admin/")
) {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {},
      },
    },
  });

  const client = new ApolloClient({
    uri: window.frontendObject.graphQLBasePath,
    cache,
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
}
