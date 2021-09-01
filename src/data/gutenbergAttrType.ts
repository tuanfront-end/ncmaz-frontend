import { HeaderSectionFilterTabItem } from "components/HeaderSectionFilter/HeaderSectionFilter";
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
    userCardName: "card1" | "card2";
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
    userCardName: "card1" | "card2";
    gridClass: string;
    gridClassCustom: string;
    heading: string;
    blockLayoutStyle: "layout-1" | "layout-2";
    subHeading: string;
    hasBackground: boolean;
  };
}

// =========================_Block User Grid============================================
export interface GutenbergApiAttr_BlockPostsGrid {
  graphQLvariables: {
    variables: {
      authorIn: number[];
      categoryIn: number[];
      field: string;
      first: number;
      order: string;
      tagIn: number[];
    };
    queryString: string;
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
  };
}

// =========================_Block User Grid============================================
export interface GutenbergApiAttr_BlockPostsSlider {
  graphQLvariables: {
    variables: {
      authorIn: number[];
      categoryIn: number[];
      field: string;
      first: number;
      order: string;
      tagIn: number[];
    };
    queryString: string;
  };
  settings: {
    blockLayoutStyle: "layout-1" | "layout-2";
    postCardName: string;
    itemPerView: number;
    showFilterTab: boolean;
    viewMoreHref: string;
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    categories: HeaderSectionFilterTabItem[];
  };
}

// =========================_Block User Grid============================================
export interface GutenbergApiAttr_BlockMagazine {
  graphQLvariables: {
    variables: {
      authorIn: number[];
      categoryIn: number[];
      field: string;
      first: number;
      order: string;
      tagIn: number[];
    };
    queryString: string;
  };
  settings: {
    sectionName: string;
    showFilterTab: boolean;
    viewMoreHref: string;
    heading: string;
    subHeading: string;
    hasBackground: boolean;
    categories: HeaderSectionFilterTabItem[];
  };
}
// =========================_Block User Grid============================================
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
  graphQLvariables: {
    variables: {
      authorIn: number[];
      categoryIn: number[];
      field: string;
      first: number;
      order: string;
      tagIn: number[];
    };
    queryString: string;
  };
  settings: {
    postCardName: string;
    heading: string;
  };
}
// =========================_Block Widget Users============================================
export interface GutenbergApiAttr_BlockWidgetUsers {
  graphQLvariables: {
    variables: {
      authorIn: number[];
      categoryIn: number[];
      field: string;
      first: number;
      order: string;
      tagIn: number[];
    };
    queryString: string;
  };
  settings: {
    heading: string;
  };
}
// =========================_Block Widget Users============================================
export interface GutenbergApiAttr_BlockWidgetTerms {
  graphQLvariables: {
    variables: {
      authorIn: number[];
      categoryIn: number[];
      field: string;
      first: number;
      order: string;
      tagIn: number[];
    };
    queryString: string;
  };
  settings: {
    heading: string;
    termCardName?: "card1" | "tag-card";
  };
}
