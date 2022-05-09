import React, { Suspense } from "react";
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

//
import "./index.css";
import "./styles/index.scss";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

interface UserViewer {
  avatar?: {
    url: string;
  };
  databaseId: number;
  email?: string;
  name?: string;
  ncUserMeta?: {
    color: string;
    ncBio: string;
    featuredImage?: {
      sourceUrl: string;
    };
  };
  slug: string;
  uri: string;
  url: string;
  userId: number;
  username?: string;
  nicename?: string;
  nickname?: string;
  locale?: string;
  roles: {
    edges: {
      node: {
        id: string;
        name:
          | "administrator"
          | "editor"
          | "author"
          | "contributor"
          | "subscriber";
      };
    }[];
  };
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
  var locales: Record<string, Record<string, string>>;
  //
  //
  var DATE_I18N: any;
  //
  var frontendObject: {
    postSubmissionPageLinkNcmazEditor: string;
    pll_current_language: string | null;
    pll_themeoption_actived: string | null;
    restUrl: string;
    ajaxurl: string;
    stylesheetDirectory: string;
    placeholderImg: string;
    graphQLBasePath: string;
    homeURL: string;
    currentUser?: UserViewer;
    currentObject: {
      id: number;
    };
    musicPlayerMediaSource: "html5" | "youtube" | "youtube-html5";
    musicPlayerMode: "true" | null;
    socialsShare: string[];
    allSettings?: {
      discussionSettingsDefaultCommentStatus: string;
      discussionSettingsDefaultPingStatus: string;
      generalSettingsDateFormat: string;
      generalSettingsDescription: string;
      generalSettingsLanguage: string;
      generalSettingsStartOfWeek: number;
      generalSettingsTimeFormat: string;
      generalSettingsTimezone: string;
      generalSettingsTitle: string;
      readingSettingsPostsPerPage: number;
      writingSettingsDefaultCategory: number;
      writingSettingsDefaultPostFormat: string;
      writingSettingsUseSmilies: boolean;
    };

    restVarsEndpoint: string;
    restVarsNonce: string;
    postFormats: ("video" | "gallery" | "audio" | "standard")[];
  };

  var ncmazFrontendVariables: {
    pluginDir: string;
    pluginDistImagesDir: string;
  };
}

if (
  window.frontendObject?.graphQLBasePath &&
  !location.pathname.includes("/wp-admin/")
) {
  const cache = new InMemoryCache({
    typePolicies: {
      // Post: {
      //   keyFields: [
      //     "ncmazVideoUrl",
      //     "ncmazAudioUrl",
      //     "ncPostMetaData",
      //     "ncmazGalleryImgs",
      //   ],
      // },
      // VI TRONG 1 Trang thuong chi co 1 section user
      // User: {
      //   keyFields: ["ncUserMeta"],
      // },
      // Category: {
      //   keyFields: ["ncTaxonomyMeta"],
      // },
      // Tag: {
      //   keyFields: ["ncTaxonomyMeta"],
      // },
    },
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
