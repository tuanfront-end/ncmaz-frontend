import { SectionSliderNewAuthorsProps } from "components/SectionSliderNewAuthors/SectionSliderNewAuthors";

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

export interface GutenbergAttr__BlockMagazine_BySpecific {
  blockName: "nc-block-magazine";
  endpoint: string;
  params: ApiParamPostSpecific;
  option: "by_post_specific";
  settings: {
    sectionName: string;
    heading: string;
    subHeading: string;
    hasBackground: boolean;
  };
}

export interface GutenbergAttr__BlockMagazine_ByFilter {
  blockName: "nc-block-magazine";
  endpoint: string;
  params: ApiParamPostByFilter;
  option: "by_filter";
  settings: {
    sectionName: string;
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    showFilterTab: boolean;
    viewMoreHref: string;
    categoriesFilter: {
      count: number;
      id: number;
      link: string;
      name: string;
      slug: string;
    }[];
  };
}

// =========================_BlockPostsSlider============================================
export interface GutenbergAttr__BlockPostsSlider_BySpecific {
  blockName: "nc-block-posts-slider";
  endpoint: string;
  params: ApiParamPostSpecific;
  option: "by_post_specific";
  settings: {
    itemPerView: number;
    postCardName: string;
    blockLayoutType: "type-1" | "type-2";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
  };
}

export interface GutenbergAttr__BlockPostsSlider_ByFilter {
  blockName: "nc-block-posts-slider";
  endpoint: string;
  params: ApiParamPostByFilter;
  option: "by_filter";
  settings: {
    itemPerView: number;
    postCardName: string;
    blockLayoutType: "type-1" | "type-2";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    showFilterTab: boolean;
    viewMoreHref: string;
    categoriesFilter: {
      count: number;
      id: number;
      link: string;
      name: string;
      slug: string;
    }[];
  };
}

// =========================_BlockPostsGrid============================================
export interface GutenbergAttr__BlockPostsGrid_BySpecific {
  blockName: "nc-block-posts-grid";
  endpoint: string;
  params: ApiParamPostSpecific;
  option: "by_post_specific";
  settings: {
    gridClass: string;
    postCardName:
      | "card3"
      | "card4"
      | "card7"
      | "card9"
      | "card10"
      | "card10V2"
      | "card11"
      | "card14"
      | "card15Podcast";
    blockLayoutType: "type-1" | "type-2";
    heading: string;
    subHeading: string;
    viewMoreHref: string;
    hasBackground: boolean;
  };
}

export interface GutenbergAttr__BlockPostsGrid_ByFilter {
  blockName: "nc-block-posts-grid";
  endpoint: string;
  params: ApiParamPostByFilter;
  option: "by_filter";
  settings: {
    gridClass: string;
    postCardName:
      | "card3"
      | "card4"
      | "card7"
      | "card9"
      | "card10"
      | "card10V2"
      | "card11"
      | "card14"
      | "card15Podcast";
    blockLayoutType: "type-1" | "type-2";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    showFilterTab: boolean;
    viewMoreHref: string;
    categoriesFilter: {
      count: number;
      id: number;
      link: string;
      name: string;
      slug: string;
    }[];
  };
}

// =========================_Block TERM SLider============================================
export interface GutenbergApiAttr_BlockTermSlider {
  graphQLvariables: {
    variables: Object;
    queryString: string;
  };
  settings: {
    blockLayoutStyle: "layout-1" | "layout-2";
    termCardName: "card2" | "card3" | "card4" | "card5";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    itemPerView: number;
  };
}
// =========================_Block TERM SLider============================================
export interface GutenbergApiAttr_BlockTermGrid {
  graphQLvariables: {
    variables: Object;
    queryString: string;
  };
  settings: {
    blockLayoutStyle: "layout-1" | "layout-2";
    termCardName: "card2" | "card3" | "card4" | "card5";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    gridClass: string;
    gridClassCustom: string;
  };
}

// =========================_Block User SLider============================================
export interface GutenbergAttr__BlockUsersSlider {
  graphQLvariables: {
    variables: Object;
    queryString: string;
  };
  settings: {
    userCardName: SectionSliderNewAuthorsProps["authorCardName"];
    itemPerView: number;
    heading: string;
    blockLayoutStyle: "layout-1" | "layout-2";
    subHeading: string;
    hasBackground: boolean;
  };
}
// =========================_Block User Grid============================================
export interface GutenbergAttr__BlockUsersGrid {
  graphQLvariables: {
    variables: Object;
    queryString: string;
  };
  settings: {
    userCardName: SectionSliderNewAuthorsProps["authorCardName"];
    gridClass: string;
    gridClassCustom: string;
    heading: string;
    blockLayoutStyle: "layout-1" | "layout-2";
    subHeading: string;
    hasBackground: boolean;
  };
}

export type NcGutenbergApiAttr_BlockMagazine =
  | GutenbergAttr__BlockMagazine_ByFilter
  | GutenbergAttr__BlockMagazine_BySpecific;

export type NcGutenbergApiAttr_BlockPostsSlider =
  | GutenbergAttr__BlockPostsSlider_BySpecific
  | GutenbergAttr__BlockPostsSlider_ByFilter;

export type NcGutenbergApiAttr_BlockPostsGrid =
  | GutenbergAttr__BlockPostsGrid_BySpecific
  | GutenbergAttr__BlockPostsGrid_ByFilter;
