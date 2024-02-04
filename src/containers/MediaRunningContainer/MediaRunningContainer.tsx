import ErrorBoundary from "ErrorBoundary";
import React, { Suspense } from "react";
import { useAppSelector } from "app/hooks";
import {
  selectCurrentMediaPostData,
  selectHasButtonPlayOnDOM,
} from "app/mediaRunning/mediaRunning";

const MediaRunningContainerChildLazy = React.lazy(
  () => import("containers/MediaRunningContainer/MediaRunningContainerChild")
);

const MediaRunningContainer = () => {
  if (!frontendObject.musicPlayerMode) {
    return null;
  }

  const currentMediaPostData = useAppSelector(selectCurrentMediaPostData);
  const hasButtonPlayOnDOM = useAppSelector(selectHasButtonPlayOnDOM);

  // currentMediaPostData: redux ĐANG KHÔNG LƯU MEDIA NÀO
  // hasButtonPlayOnDOM: CO POST CARD AUDIO TRONG DOM
  if (!currentMediaPostData && !hasButtonPlayOnDOM) {
    return null;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div />}>
        <MediaRunningContainerChildLazy />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MediaRunningContainer;
