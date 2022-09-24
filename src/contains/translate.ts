let NCMAZ_TRANSLATE = {
  // 22-9-2023
  "Comment this post": "Comment this post",
  "Edit post": "Edit post",
  // OLD
  "Add tags": "Add tags",
  "Go to search page": "Go to search page",
  "Now playing": "Now playing",
  "Listen now": "Listen now",
  "Type the URL of the iframe you want to embed":
    "Type the URL of the iframe you want to embed",
  Buymeacoffe: "Buymeacoffe",
  "https://buymeacoffee.com/yourname": "https://buymeacoffee.com/yourname",
  "buymeacoffee.com": "buymeacoffee.com",
  "yourwebsite.com": "yourwebsite.com",
  "UX/UI Designer": "UX/UI Designer",
  "Short Bio": "Short Bio",
  "Upload a file": "Upload a file",
  "Click to change": "Click to change",
  socials: "socials",
  profile: "profile",
  general: "general",
  "Logout Account": "Logout Account",
  "Add elsewhere links to your profile": "Add elsewhere links to your profile",
  "Social profiles": "Social profiles",
  "You should have an account here:": "You should have an account here:",
  "A short Bio (e.g. occupation), this will show up in the author cards.":
    "A short Bio (e.g. occupation), this will show up in the author cards.",
  "Biographical Info, this will show up in the author page.":
    "Biographical Info, this will show up in the author page.",
  "Something about yourself in a few word.":
    "Something about yourself in a few word.",
  "Biographical Info": "Biographical Info",
  Website: "Website",
  Nickname: "Nickname",
  required: "required",
  "Last Name": "Last Name",
  "First Name": "First Name",
  "Set up your profile and manage your account":
    "Set up your profile and manage your account",
  "Cover photo": "Cover photo",
  "Profile picture": "Profile picture",
  "Write an excerpt (optional)": "Write an excerpt (optional)",
  "Post will be changed to draft. You can publish it later.":
    "Post will be changed to draft. You can publish it later.",
  "Your account has been updated.": "Your account has been updated.",
  "Post deleted successfully.": "Post deleted successfully.",
  Email: "Email",
  "Display Name": "Display Name",
  "Update profile": "Update profile",
  "Edit profile": "Edit profile",
  "Draft this post": "Draft this post",
  "Post successful": "Post successful",
  "Allow comments": "Allow comments",
  password: "password",
  Discussion: "Discussion",
  "Manage your password": "Manage your password",
  "Link copied": "Link copied!",
  "Delete post": "Delete post",
  "Password must be at least 6 characters":
    "Password must be at least 6 characters",
  "Confirm password": "Confirm password",
  "New password": "New password",
  "Update your username and manage your account":
    "Update your username and manage your account",
  "General settings": "General settings",
  "Update password": "Update password",
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

// LẤY DỮ LIỆU TỪ JSON TỪ REDUX - TRẢ VỀ QUA BIẾN frontendObject
try {
  _handleFrontendTranslationsFromtendObject();
} catch (error) {
  console.warn("---- Redux translate frontend file error format ----", error);
}

function _handleFrontendTranslationsFromtendObject() {
  const {
    frontendTranslations,
    pll_themeoption_actived,
    pll_current_language_correct_code,
  } = frontendObject;
  if (!frontendTranslations) {
    return;
  }

  const LANG_DEFAULT = frontendTranslations.filter(
    (item) => item.language === "default"
  )?.[0];

  if (LANG_DEFAULT && !!LANG_DEFAULT.jsCode) {
    const defaultJsCode = JSON.parse(LANG_DEFAULT.jsCode);
    if (defaultJsCode && typeof defaultJsCode === "object") {
      NCMAZ_TRANSLATE = {
        ...NCMAZ_TRANSLATE,
        ...defaultJsCode,
      };
    }
  }
  // MULTI LANGUAGE
  if (!pll_themeoption_actived || !pll_current_language_correct_code) {
    return;
  }
  const LANG_CURRENT = frontendTranslations.filter(
    (item) => item.language === pll_current_language_correct_code
  )?.[0];
  if (LANG_CURRENT && !!LANG_CURRENT.jsCode) {
    const currentJsCode = JSON.parse(LANG_CURRENT.jsCode);
    if (currentJsCode && typeof currentJsCode === "object") {
      NCMAZ_TRANSLATE = {
        ...NCMAZ_TRANSLATE,
        ...currentJsCode,
      };
    }
  }
}

// PHẦN NÀY CŨ - LẤY CODEJS TỪ CÁC FILE JS TRONG THƯ MỤC LOCALES Ở THEME
// TRONG BẢN CẬP NHẬT MỚI, THƯ MỤC NÀY ĐÃ BỊ XOÁ, VÀ ĐƯỢC THAY THẾ BẰNG DỮ LIỆU TỪ REDUX -
try {
  _handleFrontendTranslationsFromLocalesFiles();
} catch (error) {
  console.warn("---- translate: locales files error format ----", error);
}

function _handleFrontendTranslationsFromLocalesFiles() {
  if (!window.locales) {
    return;
  }
  if (!!window.locales["DEFAULT"]) {
    NCMAZ_TRANSLATE = {
      ...NCMAZ_TRANSLATE,
      ...(window.locales["DEFAULT"] as any),
    };
  }
  // MULTI LANGUAGE
  if (!!frontendObject.pll_current_language) {
    if (window.locales[frontendObject.pll_current_language]) {
      NCMAZ_TRANSLATE = {
        ...NCMAZ_TRANSLATE,
        ...(window.locales[frontendObject.pll_current_language] as any),
      };
    }
  }
}

export default NCMAZ_TRANSLATE;
