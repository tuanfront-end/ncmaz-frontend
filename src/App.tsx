import React, { Suspense } from "react";
import GutenbergSections from "GutenbergSections";
import HeaderFactory from "HeaderFactory";
import FactoryComponents from "containers/FactoryComponents/FactoryComponents";
import ErrorBoundary from "ErrorBoundary";
import { ToastContainer } from "react-toastify";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";

//
const ScrollTopLazy = React.lazy(() => import("components/ScrollTop"));
//
const LazyCssRTLLazy = React.lazy(() => import("./LazyCssRTL"));
const LazyCssCommentsLazy = React.lazy(() => import("./LazyCssComments"));
const LazyCssSingleProseLazy = React.lazy(() => import("./LazyCssSingleProse"));
const LazyCssWUFPluginLazy = React.lazy(() => import("./LazyCssWUFPlugin"));
const LazyCssWoocommerceLazy = React.lazy(() => import("./LazyCssWoocommerce"));
//

function App() {
  return (
    <>
      <ErrorBoundary>
        <HeaderFactory />
      </ErrorBoundary>

      {/* ------- */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        style={{
          top: (document.getElementById("wpadminbar")?.clientHeight || 0) + 6,
        }}
        toastClassName={"toast-container-class"}
      />

      {/* ------- */}
      <FactoryComponents />

      {/* ------- */}
      <GutenbergSections />

      {/* ---------- */}

      <div className="fixed bottom-0 inset-x-0 flex flex-col items-end z-30">
        <Suspense fallback={<div />}>
          <ScrollTopLazy />
        </Suspense>

        {/* ---------- */}
        <MediaRunningContainer />
      </div>

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
