let NCMAZ_TRANSLATE = {
  nothingWeFound: "Nothing we found!",
  all: "All",
  viewAll: "View All",
  articles: "Articles",
  showMeMore: "Show me more",
  showAllPhotos: "Show all photos",
  relatedPosts: "Related Posts",
  moreFromAuthor: "More from author",
  ThistrackwasnotfoundMaybeitHasBeenRemoved:
    "This track was not found. Maybe it has been removed!",
  mostRecent: "Most Recent",
  mostLiked: "Most Liked",
  mostDiscussed: "Most Discussed",
  mostViewed: "Most Viewed",
  typeAndPressEnter: "Type and press enter",
  next: "Next",
  prev: "Prev",
};

//
try {
  if (
    frontendObject.frontendTranslate &&
    typeof frontendObject.frontendTranslate === "string"
  ) {
    const jsF = JSON.parse(frontendObject.frontendTranslate);

    if (jsF && typeof jsF === "object") {
      NCMAZ_TRANSLATE = {
        ...NCMAZ_TRANSLATE,
        ...jsF,
      };
    }
  }
} catch (error) {
  console.warn("----translate frontend file error ----", error);
}

export default NCMAZ_TRANSLATE;
