import React, { Suspense } from "react";
import GutenbergSections from "GutenbergSections";
import HeaderFactory from "HeaderFactory";
import FactoryComponents from "containers/FactoryComponents/FactoryComponents";
//
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
        <MediaRunningContainerLazy />
      </Suspense>
    </>
  );
}

export default App;
