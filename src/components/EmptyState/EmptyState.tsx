import NCMAZ_TRANSLATE from "contains/translate";
import React from "react";

const EmptyState = () => {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center text-center`}
    >
      <img
        src={ncmazFrontendVariables.pluginDistImagesDir + "empty.png"}
        className="w-36 sm:w-40"
        alt="empty state"
      />
      <span className="text-sm block text-neutral-500">
        {NCMAZ_TRANSLATE["nothingWeFound"]}
      </span>
    </div>
  );
};

export default EmptyState;
