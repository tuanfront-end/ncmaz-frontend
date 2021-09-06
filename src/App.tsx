import React from "react";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";
import GutenbergSections from "GutenbergSections";
import HeaderFactory from "HeaderFactory";

function App() {
  return (
    <>
      <HeaderFactory />
      <GutenbergSections />
      {/* ---------- */}
      <MediaRunningContainer />
    </>
  );
}

export default App;
