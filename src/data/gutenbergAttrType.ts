import { HeaderSectionFilterTabItem } from "components/HeaderSectionFilter/HeaderSectionFilter";
import { PageInfo } from "containers/SingleComments/commentType";
import { AuthorNode, ListPosts, ListTerms } from "./postCardType";
import { GraphQlPageInfo } from "./types";

export interface Users {
  edges: Edge[];
  pageInfo: GraphQlPageInfo;
  __typename?: string;
}
export interface Edge {
  node: AuthorNode;
  __typename?: string;
}

export interface ApiParamPostByFilter {
  authors: string[];
  categories: string[]; //IDs array
  tags: string[]; //IDs array
  orderBy: string;
  order: string;
  per_page: number;
}
export interface ApiParamPostSpecific {
  slug: string[]; //SLUGs array
}

//
export interface VariablesGutenbergGQLGetPosts {
  variables: {
    authorIn: number[];
    categoryIn: number[];
    field: string;
    first: number;
    order: string;
    tagIn: number[];
  };
  queryString: string;
}

export interface VariablesGutenbergGQLGetTerms {
  variables: Object;
  queryString: string;
}
export interface VariablesGutenbergGQLGetUsers {
  variables: Object;
  queryString: string;
}
//
//
export interface ListPostsGQLResultData {
  posts: ListPosts;
}
export interface ListUsersGQLResultData {
  users: Users;
}

export interface ListTermsGQLResultData {
  categories?: ListTerms;
  tags?: ListTerms;
}

// =========================_Block TERM SLider============================================
export interface GutenbergApiAttr_BlockTermSlider {
  graphQLvariables?: VariablesGutenbergGQLGetTerms;
  graphQLData?: ListTermsGQLResultData;
  hasSSrInitData?: {
    hasSSrInitData: boolean;
    initTermIDs: (number | string)[];
  };
  settings: {
    blockLayoutStyle: "layout-1" | "layout-2";
    termCardName: "card2" | "card3" | "card4" | "card5";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    // slider settings =========================
    itemPerView: number;
    sliderStartAt: number;
    sliderAutoplayTime: number;
    sliderHoverpause: boolean;
    sliderAnimationDuration: number;
    sliderRewind: boolean;
    expectedNumberResults?: number;
  };
}
// =========================_Block TERM SLider============================================
export interface GutenbergApiAttr_BlockTermGrid {
  graphQLvariables?: VariablesGutenbergGQLGetTerms;
  graphQLData?: ListTermsGQLResultData;
  hasSSrInitData?: {
    hasSSrInitData: boolean;
    initTermIDs: (number | string)[];
  };
  settings: {
    blockLayoutStyle: "layout-1" | "layout-2";
    termCardName: "card2" | "card3" | "card4" | "card5";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    gridClass: string;
    gridClassCustom: string;
    expectedNumberResults?: number;
  };
}

// =========================_Block User SLider============================================
export interface GutenbergAttr__BlockUsersSlider {
  graphQLvariables?: VariablesGutenbergGQLGetUsers;
  graphQLData?: ListUsersGQLResultData;
  hasSSrInitData?: {
    hasSSrInitData: boolean;
    initUserIDs: (number | string)[];
  };
  settings: {
    userCardName: "card1" | "card2";
    heading: string;
    blockLayoutStyle: "layout-1" | "layout-2";
    subHeading: string;
    hasBackground: boolean;
    // slider settings =========================
    itemPerView: number;
    sliderStartAt: number;
    sliderAutoplayTime: number;
    sliderHoverpause: boolean;
    sliderAnimationDuration: number;
    sliderRewind: boolean;
    expectedNumberResults?: number;
  };
}

// =========================_Block User Grid============================================
export interface GutenbergAttr__BlockUsersGrid {
  graphQLvariables?: VariablesGutenbergGQLGetUsers;
  graphQLData?: ListUsersGQLResultData;
  hasSSrInitData?: {
    hasSSrInitData: boolean;
    initUserIDs: (number | string)[];
  };
  settings: {
    userCardName: "card1" | "card2";
    gridClass: string;
    gridClassCustom: string;
    heading: string;
    blockLayoutStyle: "layout-1" | "layout-2";
    subHeading: string;
    hasBackground: boolean;
    expectedNumberResults?: number;
  };
}

// =========================_Block POSTS Grid============================================
export interface GutenbergApiAttr_BlockPostsGrid {
  graphQLvariables?: VariablesGutenbergGQLGetPosts;
  graphQLData?: ListPostsGQLResultData;
  hasSSrInitData?: {
    hasSSrInitData: boolean;
    initPostIDs: number[];
    initPageInfo?: PageInfo;
  };
  settings: {
    blockLayoutStyle: "layout-1" | "layout-2";
    postCardName: string;
    gridClass: string;
    gridClassCustom: string;
    showFilterTab: boolean;
    viewMoreHref: string;
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    categories: HeaderSectionFilterTabItem[];
    enableLoadMoreButton: boolean;
    loadMoreButtonHref: string;
    filterDataBy: "by_specific" | "by_filter";
    expectedNumberResults?: number;
  };
}

// =========================_Block POST SLIDER============================================
export interface GutenbergApiAttr_BlockPostsSlider {
  graphQLvariables?: VariablesGutenbergGQLGetPosts;
  graphQLData?: ListPostsGQLResultData;
  hasSSrInitData?: {
    hasSSrInitData: boolean;
    initPostIDs: number[];
    initPageInfo?: PageInfo;
  };
  settings: {
    blockLayoutStyle: "layout-1" | "layout-2";
    postCardName: string;
    showFilterTab: boolean;
    viewMoreHref: string;
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    categories: HeaderSectionFilterTabItem[];
    // slider settings =========================
    itemPerView: number;
    sliderStartAt: number;
    sliderAutoplayTime: number;
    sliderHoverpause: boolean;
    sliderAnimationDuration: number;
    sliderRewind: boolean;
    expectedNumberResults?: number;
  };
}

// =========================_Block MAGAZINE ============================================
export interface GutenbergApiAttr_BlockMagazine {
  graphQLvariables?: VariablesGutenbergGQLGetPosts;
  graphQLData?: ListPostsGQLResultData;
  hasSSrInitData?: {
    hasSSrInitData: boolean;
    initPostIDs: number[];
    initPageInfo?: PageInfo;
  };
  settings: {
    sectionName: string;
    showFilterTab: boolean;
    viewMoreHref: string;
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    categories: HeaderSectionFilterTabItem[];
    expectedNumberResults?: number;
  };
}
// =========================_Block VIDEO============================================
export interface GutenbergApiAttr_BlockVideos {
  settings: {
    heading: string;
    subHeading: string;
    videoIds: string[];
    hasBackground: boolean;
  };
}

// =========================_Block Widget Posts============================================
export interface GutenbergApiAttr_BlockWidgetPots {
  graphQLvariables?: VariablesGutenbergGQLGetPosts;
  graphQLData?: ListPostsGQLResultData;
  hasSSrInitData?: {
    hasSSrInitData: boolean;
    initPostIDs: number[];
  };
  settings: {
    postCardName: string;
    heading: string;
    expectedNumberResults?: number;
  };
}

// =========================_Block Widget Users============================================
export interface GutenbergApiAttr_BlockWidgetUsers {
  graphQLvariables?: VariablesGutenbergGQLGetUsers;
  graphQLData?: ListUsersGQLResultData;
  hasSSrInitData?: {
    hasSSrInitData: boolean;
    initUserIDs: (number | string)[];
  };
  settings: {
    heading: string;
    expectedNumberResults?: number;
  };
}

// =========================_Block Widget TERMS============================================
export interface GutenbergApiAttr_BlockWidgetTerms {
  graphQLvariables?: VariablesGutenbergGQLGetTerms;
  graphQLData?: ListTermsGQLResultData;
  hasSSrInitData?: {
    hasSSrInitData: boolean;
    initTermIDs: (number | string)[];
  };
  settings: {
    heading: string;
    termCardName?: "card1" | "tag-card";
    expectedNumberResults?: number;
  };
}
