import React from "react";

const EmptyState = () => {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center text-center`}
    >
      <img
        src={ncmazFrontendVariables.emptyStatePng}
        className="w-36 sm:w-40"
        alt="empty state"
      />
      <span className="text-sm block text-neutral-500">Nothing we found!</span>
    </div>
  );
};

export default EmptyState;
