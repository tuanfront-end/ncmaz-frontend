import React, { Suspense } from "react";
import GutenbergSections from "GutenbergSections";
import HeaderFactory from "HeaderFactory";
import FactoryComponents from "containers/FactoryComponents/FactoryComponents";
import ErrorBoundary from "ErrorBoundary";
import ScrollTop from "components/ScrollTop";

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
          <MediaRunningContainerLazy />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
