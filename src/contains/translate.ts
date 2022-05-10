let NCMAZ_TRANSLATE = {
  "Write an excerpt (optional)": "Write an excerpt (optional)",
  "Post will be changed to draft. You can publish it later.":
    "Post will be changed to draft. You can publish it later.",
  "Your account has been updated.": "Your account has been updated.",
  "Post deleted successfully.": "Post deleted successfully.",
  "Draft this post": "Draft this post",
  "Post successful": "Post successful",
  "Allow comments": "Allow comments",
  Discussion: "Discussion",
  "Link copied": "Link copied",
  "Delete post": "Delete post",
  "Are you sure you want to delete this post? You cannot undo this action.":
    "Are you sure you want to delete this post? You cannot undo this action.",
  "Copy link": "Copy link",
  Update: "Update",
  "Save draft": "Save draft",
  Drafts: "Drafts",
  Pendings: "Pendings",
  Published: "Published",
  Publish: "Publish",
  selected: "selected",
  "Add up to 5 tags": "Add up to 5 tags",
  "Add up to 5 categories": "Add up to 5 categories",
  "Choose categories": "Choose categories",
  "Add another": "Add another",
  "Top tags": "Top tags",
  "Add a cover image": "Add a cover image",
  "Write your post content here…": "Write your post content here…",
  "New post title here…": "New post title here…",
  "File type is not allowed": "File type is not allowed",
  "Only image files are permitted": "Only image files are permitted",
  Apply: "Apply",
  Cancel: "Cancel",
  Upload: "Upload",
  "Insert from URL": "Insert from URL",
  "Upload image": "Upload image",
  "Unset link": "Unset link",
  "Image URL": "Image URL",
  "Gallery images": "Gallery images",
  "Paste or type a link": "Paste or type a link",
  "Alt text (alternative text)": "Alt text (alternative text)",
  Image: "Image",
  //
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
// try {
//   if (
//     frontendObject.frontendTranslate &&
//     typeof frontendObject.frontendTranslate === "string"
//   ) {
//     const jsF = JSON.parse(frontendObject.frontendTranslate);

//     if (jsF && typeof jsF === "object") {
//       NCMAZ_TRANSLATE = {
//         ...NCMAZ_TRANSLATE,
//         ...jsF,
//       };
//     }
//   }
// } catch (error) {
//   console.warn("----translate frontend file error ----", error);
// }
try {
  //
  if (!!window.locales && !!window.locales["DEFAULT"]) {
    NCMAZ_TRANSLATE = {
      ...NCMAZ_TRANSLATE,
      ...(window.locales["DEFAULT"] as any),
    };
  }

  //

  if (!!window.locales && !!window.frontendObject.pll_current_language) {
    if (window.locales[window.frontendObject.pll_current_language]) {
      NCMAZ_TRANSLATE = {
        ...NCMAZ_TRANSLATE,
        ...(window.locales[window.frontendObject.pll_current_language] as any),
      };
    }
  }
} catch (error) {
  console.warn("----translate: locales files error format ----", error);
}

export default NCMAZ_TRANSLATE;
