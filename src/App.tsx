import React, { Suspense } from "react";
import HeaderFactory from "HeaderFactory";
import FactoryComponents from "containers/FactoryComponents/FactoryComponents";
import ReactDOM from "react-dom";
import ErrorBoundary from "ErrorBoundary";
import { Toaster } from "react-hot-toast";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
//
const ScrollTopLazy = React.lazy(() => import("components/ScrollTop"));
const BuyNowForDemoPageLazy = React.lazy(
  () => import("components/BuyNowForDemoPage")
);
//
const GutenbergSectionsLazy = React.lazy(() => import("./GutenbergSections"));
const LazyCssRTLLazy = React.lazy(() => import("./LazyCssRTL"));
const LazyCssCommentsLazy = React.lazy(() => import("./LazyCssComments"));
const LazyCssSingleProseLazy = React.lazy(() => import("./LazyCssSingleProse"));
const LazyCssWUFPluginLazy = React.lazy(() => import("./LazyCssWUFPlugin"));
const LazyCssWoocommerceLazy = React.lazy(() => import("./LazyCssWoocommerce"));
//

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

function App() {
  // CHECK FOR GRAPHQL
  if (!window.frontendObject?.graphQLBasePath) {
    return null;
  }

  const renderFooterFixedContent = () => {
    return (
      <>
        {frontendObject.enableScrollToTop && (
          <Suspense fallback={<div />}>
            <ScrollTopLazy />
          </Suspense>
        )}

        <MediaRunningContainer />
      </>
    );
  };

  const renderFooterFixed = () => {
    const domNode = document.getElementById("nc-footer-fixed-area");
    if (!domNode) {
      return null;
    }

    return ReactDOM.createPortal(renderFooterFixedContent(), domNode);
  };

  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <HeaderFactory />
      </ErrorBoundary>

      {/* ------- */}
      <Toaster
        containerStyle={{
          top: 40,
          left: 40,
          bottom: 40,
          right: 40,
          zIndex: 9999999,
        }}
      />

      {/* ------- */}
      <FactoryComponents />

      {/* ------- */}
      <Suspense fallback={<div />}>
        <GutenbergSectionsLazy />
      </Suspense>

      {/* ---------- */}
      {renderFooterFixed()}

      {/* ---------- */}
      {/* LOAD RTL CSS WHEN RTL MODE ENABLE */}
      {document.querySelector("html")?.getAttribute("dir") === "rtl" && (
        <Suspense fallback={<div />}>
          <LazyCssRTLLazy />
        </Suspense>
      )}

      {!!document.querySelector("#comments") && (
        <Suspense fallback={<div />}>
          <LazyCssCommentsLazy />
        </Suspense>
      )}

      {!!document.querySelector(".prose") && (
        <Suspense fallback={<div />}>
          <LazyCssSingleProseLazy />
        </Suspense>
      )}

      {!!document.querySelector("[data-is-ncmaz-demo-site='yes']") && (
        <Suspense fallback={<div />}>
          <BuyNowForDemoPageLazy />
        </Suspense>
      )}

      {import.meta.env.DEV && (
        <Suspense fallback={<div />}>
          <LazyCssWoocommerceLazy />
        </Suspense>
      )}

      {(!!document.querySelector(".wpuf-dashboard-container") ||
        !!document.querySelector(".wpuf-form") ||
        !!document.querySelector(".wpuf_packs")) && (
        <Suspense fallback={<div />}>
          <LazyCssWUFPluginLazy />
        </Suspense>
      )}
    </ApolloProvider>
  );
}

export default App;
