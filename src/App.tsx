import React, { Suspense } from "react";
import GutenbergSections from "GutenbergSections";
import HeaderFactory from "HeaderFactory";
import FactoryComponents from "containers/FactoryComponents/FactoryComponents";
import isSafariBrowser from "utils/isSafariBrowser";
import ErrorBoundary from "ErrorBoundary";
import ScrollTop from "components/ScrollTop";
//
const MediaRunningContainerForSafariLazy = React.lazy(
  () =>
    import("containers/MediaRunningContainer/MediaRunningContainerForSafari")
);
const MediaRunningContainerLazy = React.lazy(
  () => import("containers/MediaRunningContainer/MediaRunningContainer")
);
//

function App() {
  return (
    <>
      <ErrorBoundary>
        <HeaderFactory />
      </ErrorBoundary>

      {/* ------- */}
      <FactoryComponents />

      {/* ------- */}
      <GutenbergSections />

      {/* ---------- */}
      <ScrollTop />

      {/* ---------- */}
      <ErrorBoundary>
        <Suspense fallback={<div />}>
          {/* //is Safari on an apple touch-screen device */}
          {isSafariBrowser() ? (
            <MediaRunningContainerForSafariLazy />
          ) : (
            <MediaRunningContainerLazy />
          )}
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
