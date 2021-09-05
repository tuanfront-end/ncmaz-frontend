import React from "react";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";
import GutenbergSections from "GutenbergSections";
import Megamenus from "Megamenus";

function App() {
  return (
    <>
      <Megamenus />
      {/* <GutenbergSections /> */}
      {/* ---------- */}
      <MediaRunningContainer />
    </>
  );
}

export default App;
