let NCMAZ_TRANSLATE = {
  nothingWeFound: "Nothing we found!",
  all: "All",
  viewAll: "View All",
  articles: "Articles",
  showMeMore: "Show me more",
  showAllPhotos: "Show all photos",
  relatedPosts: "Related Posts",
  moreFromAuthor: "More from author",
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
  console.log("----translate frontend file error ----", error);
}

export default NCMAZ_TRANSLATE;
