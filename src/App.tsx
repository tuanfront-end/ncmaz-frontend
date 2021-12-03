import React, { Suspense } from "react";
import GutenbergSections from "GutenbergSections";
import HeaderFactory from "HeaderFactory";
import FactoryComponents from "containers/FactoryComponents/FactoryComponents";
import isSafariBrowser from "utils/isSafariBrowser";
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
      <HeaderFactory />

      {/* ------- */}
      <FactoryComponents />

      {/* ------- */}
      <GutenbergSections />

      {/* ---------- */}
      <Suspense fallback={<div />}>
        {/* //is Safari on an apple touch-screen device */}
        {isSafariBrowser() ? (
          <MediaRunningContainerForSafariLazy />
        ) : (
          <MediaRunningContainerLazy />
        )}
      </Suspense>
    </>
  );
}

export default App;
