import React from "react";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";
import GutenbergSections from "GutenbergSections";
import HeaderFactory from "HeaderFactory";
import FactoryComponents from "containers/FactoryComponents/FactoryComponents";

function App() {
  return (
    <>
      {/* <HeaderFactory /> */}

      {/* ------- */}
      <FactoryComponents />

      {/* ------- */}
      <GutenbergSections />

      {/* ---------- */}
      <MediaRunningContainer />
    </>
  );
}

export default App;
