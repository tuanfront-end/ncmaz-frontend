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

// =========================_BlockTermSlider============================================
export interface GutenbergAttr__BlockTermsSlider_BySpecific {
  blockName: "nc-block-terms-slider";
  option: "by_term_specific";
  typeOfTerm: "tag" | "category";
  params: {
    termIds: string[]; //IDs array
  };
  settings: {
    itemPerView: number;
    termCardName: "card2" | "card3" | "card4" | "card5";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
  };
}

export interface GutenbergAttr__BlockTermsSlider_ByFilter {
  blockName: "nc-block-terms-slider";
  option: "by_filter";
  typeOfTerm: "tag" | "category";
  params: {
    orderby: string;
    order: string;
    per_page: number;
  };
  settings: {
    itemPerView: number;
    termCardName: "card2" | "card3" | "card4" | "card5";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
  };
}

// =========================_BlockTermsGrid============================================
export interface GutenbergAttr__BlockTermsGrid_BySpecific {
  blockName: "nc-block-terms-grid";
  option: "by_term_specific";
  typeOfTerm: "tag" | "category";
  params: {
    termIds: string[]; //IDs array
  };
  settings: {
    termCardName: "card2" | "card3" | "card4" | "card5";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    blockLayoutType: "type-1" | "type-2";
    gridClass: string;
    gridClassCustom: string;
  };
}

export interface GutenbergAttr__BlockTermsGrid_ByFilter {
  blockName: "nc-block-terms-grid";
  option: "by_filter";
  typeOfTerm: "tag" | "category";
  params: {
    orderby: string;
    order: string;
    per_page: number;
  };
  settings: {
    termCardName: "card2" | "card3" | "card4" | "card5";
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    blockLayoutType: "type-1" | "type-2";
    gridClass: string;
    gridClassCustom: string;
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

export type NcGutenbergApiAttr_BlockTermSlider =
  | GutenbergAttr__BlockTermsSlider_ByFilter
  | GutenbergAttr__BlockTermsSlider_BySpecific;

export type NcGutenbergApiAttr_BlockTermGrid =
  | GutenbergAttr__BlockTermsGrid_ByFilter
  | GutenbergAttr__BlockTermsGrid_BySpecific;
