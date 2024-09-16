// import bookmarkReducer from "./bookmarks/bookmarksSlice";
// import postLikesReducer from "./postLikes/postLikes";
// import commentLikesReducer from "./commentLikes/commentLikes";
import pagesReducer from "./pages/pages";
import mediaRunningReducer from "./mediaRunning/mediaRunning";
import postsDeletedReducer from "./postsDeleted/postsDeleted";

const rootReducers = {
  // bookmark: bookmarkReducer,
  // postLike: postLikesReducer,
  // commentLikes: commentLikesReducer,
  // pages: pagesReducer,
  mediaRunning: mediaRunningReducer,
  postsDeleted: postsDeletedReducer,
};

export default rootReducers;
