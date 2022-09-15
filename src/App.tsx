import React, { Suspense } from "react";
import GutenbergSections from "GutenbergSections";
import HeaderFactory from "HeaderFactory";
import FactoryComponents from "containers/FactoryComponents/FactoryComponents";
import ReactDOM from "react-dom";
import ErrorBoundary from "ErrorBoundary";
import { Toaster } from "react-hot-toast";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";

//
const ScrollTopLazy = React.lazy(() => import("components/ScrollTop"));
const BuyNowForDemoPageLazy = React.lazy(
  () => import("components/BuyNowForDemoPage")
);
//
const LazyCssRTLLazy = React.lazy(() => import("./LazyCssRTL"));
const LazyCssCommentsLazy = React.lazy(() => import("./LazyCssComments"));
const LazyCssSingleProseLazy = React.lazy(() => import("./LazyCssSingleProse"));
const LazyCssWUFPluginLazy = React.lazy(() => import("./LazyCssWUFPlugin"));
const LazyCssWoocommerceLazy = React.lazy(() => import("./LazyCssWoocommerce"));
//

function App() {
  const renderFooterFixedContent = () => {
    return (
      // <div className="fixed bottom-0 inset-x-0 flex flex-col items-end z-30">
      <>
        <Suspense fallback={<div />}>
          <ScrollTopLazy />
        </Suspense>

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
    <>
      <ErrorBoundary>
        <HeaderFactory />
      </ErrorBoundary>

      {/* ------- */}
      <Toaster
        containerStyle={{
          top: 50,
          left: 50,
          bottom: 50,
          right: 50,
        }}
      />

      {/* ------- */}
      <FactoryComponents />

      {/* ------- */}
      <GutenbergSections />

      {/* ---------- */}

      {renderFooterFixed()}
      {/* <div className="fixed bottom-0 inset-x-0 flex flex-col items-end z-30">
        <Suspense fallback={<div />}>
          <ScrollTopLazy />
        </Suspense>
 
        <MediaRunningContainer />
      </div> */}

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
    </>
  );
}

export default App;
