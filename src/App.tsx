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

      <div className="fixed bottom-0 inset-x-0 flex flex-col items-end z-30">
        <ScrollTop />

        {/* ---------- */}
        {!!frontendObject.musicPlayerMode ? (
          <ErrorBoundary>
            <Suspense fallback={<div />}>
              <MediaRunningContainerLazy />
            </Suspense>
          </ErrorBoundary>
        ) : null}
      </div>
    </>
  );
}

export default App;
