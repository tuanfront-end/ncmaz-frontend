let NCMAZ_TRANSLATE = {
  nothingWeFound: "Nothing we found!",
  author: "author",
  authors: "authors",
  all: "All",
  viewAll: "View All",
  articles: "Articles",
  categories: "categories",
  category: "category",
  tags: "tags",
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
  filters: "Filters",
  wereFoundForKeyword: "were found for keyword",
  LikedArticles: "Liked Articles",
  suggestions: "Suggestions",
  somethingWentWrong: "Something went wrong",
  other: "Other",
  otherTags: "Other Tags",
  otherCategories: "Other Categories",
  discoverOtherTags: "Discover other tags",
  discoverOtherCategories: "Discover other categories",
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
