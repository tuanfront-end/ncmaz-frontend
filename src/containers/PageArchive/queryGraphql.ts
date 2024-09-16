import {
  EDGES_POST_COMMONT_FIELDS,
  EDGES_USER_COMMONT_FIELDS,
} from "contains/contants";
import { FEATURED_IMAGE_COMMONT } from "contains/contantsCommon";

let POSTS_SECTION_BY_SEARCH_NO_FILTER__string = `
  query MyQueryPostsOnArchivePageNoFilter(
    $last: Int = null,
    $first: Int = 10,
    $before: String = null,
    $notIn: [ID] = null,
    $after: String = null,
    $search: String = null
    
  ) {
    posts(
      where: {
        search: $search
        notIn: $notIn,
      },
      last: $last,
      first: $first,
      before: $before,
      after: $after
    ) {
     ${EDGES_POST_COMMONT_FIELDS}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`;

let POSTS_SECTION_BY_FILTER__string = `
  query MyQueryPostsOnArchivePage(
    $status: PostStatusEnum = null
    $field: PostObjectsConnectionOrderbyEnum = AUTHOR,
    $order: OrderEnum = ASC,
    $in: [ID] = null,
    $categoryIn: [ID] = [],
    $tagIn: [ID] = [],
    $authorIn: [ID] = [],
    $last: Int = null,
    $first: Int = 10,
    $before: String = null,
    $after: String = null,
    $notIn: [ID] = null,
    $year: Int = null,
    $month: Int = null,
    $day: Int = null,
    $search: String = null
    
  ) {
    posts(
      where: {
        status: $status
        in: $in
        orderby: { field: $field, order: $order },
        categoryIn: $categoryIn,
        tagIn: $tagIn,
        authorIn: $authorIn,
        notIn: $notIn,
        dateQuery: {year: $year, month: $month, day: $day},
        search: $search
      },
      last: $last,
      first: $first,
      before: $before,
      after: $after
    ) {
     ${EDGES_POST_COMMONT_FIELDS}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`;

// ===================================== TERMS =================================
let GET_LIST_CATEGORIES = `query GET_LIST_CATEGORIES(
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $parent: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
 
  ) {
  categories(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: {parent: $parent, orderby: $orderby, order: DESC, search: $search, exclude: $exclude }
    ) {
    edges {
      node {
        id
        categoryId
        count
        databaseId
        description
        name
        link
        termTaxonomyId
        parentId
        parentDatabaseId
        ncTaxonomyMeta {
          color
          featuredImage {
            ${FEATURED_IMAGE_COMMONT}
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasPreviousPage
      hasNextPage
      startCursor
      total
    }
  }
}
`;

let GET_LIST_CATEGORIES_NO_PARENT = `query GET_LIST_CATEGORIES_NO_PARENT(
  $order: OrderEnum = DESC
  $hideEmpty: Boolean = false,
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $search: String = null,
  $exclude: [ID] = "",
  
  ) {
  categories(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: { 
      orderby: $orderby 
      order: $order
      search: $search
      exclude: $exclude 
      hideEmpty: $hideEmpty
    }
    ) {
    edges {
      node {
        id
        categoryId
        count
        databaseId
        description
        name
        link
        termTaxonomyId
        parentId
        parentDatabaseId
        ncTaxonomyMeta {
          color
          featuredImage {
            ${FEATURED_IMAGE_COMMONT}
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasPreviousPage
      hasNextPage
      startCursor
      total
    }
  }
}
`;

let GET_LIST_TAGS = `query GET_LIST_TAGS(
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  
  ) {
  tags(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: { search: $search, exclude: $exclude }
    ) {
    edges {
      node {
        id
        count
        databaseId
        description
        link
        name
        slug
        tagId
        termTaxonomyId
        ncTaxonomyMeta {
          color
          featuredImage {
            ${FEATURED_IMAGE_COMMONT}
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
      total
    }
  }
}
`;

// =========================== ENABLE POPYLANG ============================
// CHECK ENABLE POLYLANG
let IS_ENABLE_PLL =
  !!window.frontendObject.pll_current_language &&
  !!window.frontendObject.pll_themeoption_actived;

if (IS_ENABLE_PLL) {
  POSTS_SECTION_BY_SEARCH_NO_FILTER__string = `
  query MyQueryPostsOnArchivePageNoFilter(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
    $last: Int = null,
    $first: Int = 10,
    $before: String = null,
    $notIn: [ID] = null,
    $after: String = null,
    $search: String = null
     
  ) {
    posts(
      where: {
        language: $language,
        notIn: $notIn,
        search: $search
      },
      last: $last,
      first: $first,
      before: $before,
      after: $after
    ) {
     ${EDGES_POST_COMMONT_FIELDS}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`;

  POSTS_SECTION_BY_FILTER__string = `
  query MyQueryPostsOnArchivePage(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
    $field: PostObjectsConnectionOrderbyEnum = AUTHOR,
    $order: OrderEnum = ASC,
    $in: [ID] = null,
    $categoryIn: [ID] = [],
    $tagIn: [ID] = [],
    $authorIn: [ID] = [],
    $last: Int = null,
    $first: Int = 10,
    $before: String = null,
    $after: String = null,
    $notIn: [ID] = null,
    $year: Int = null,
    $month: Int = null,
    $day: Int = null,
    $search: String = null
     
  ) {
    posts(
      where: {
        language: $language,
        in: $in,
        orderby: { field: $field, order: $order },
        categoryIn: $categoryIn,
        tagIn: $tagIn,
        authorIn: $authorIn,
        notIn: $notIn,
        dateQuery: {year: $year, month: $month, day: $day},
        search: $search
      },
      last: $last,
      first: $first,
      before: $before,
      after: $after
    ) {
     ${EDGES_POST_COMMONT_FIELDS}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`;

  // ===================================== TERMS =================================
  GET_LIST_CATEGORIES = `query GET_LIST_CATEGORIES(
  $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $parent: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
   
  ) {
  categories(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: {
      language: $language,
      parent: $parent, orderby: $orderby, order: DESC, search: $search, exclude: $exclude 
    }
    ) {
    edges {
      node {
        id
        categoryId
        count
        databaseId
        description
        name
        link
        termTaxonomyId
        parentId
        parentDatabaseId
        ncTaxonomyMeta {
          color
          featuredImage {
            ${FEATURED_IMAGE_COMMONT}
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasPreviousPage
      hasNextPage
      startCursor
      total
    }
  }
}
`;

  GET_LIST_CATEGORIES_NO_PARENT = `query GET_LIST_CATEGORIES_NO_PARENT(
  $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $search: String = null,
  $exclude: [ID] = "",
   
  ) {
  categories(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: { 
      language: $language,
      orderby: $orderby, order: DESC, search: $search, exclude: $exclude 
    }
    ) {
    edges {
      node {
        id
        categoryId
        count
        databaseId
        description
        name
        link
        termTaxonomyId
        parentId
        parentDatabaseId
        ncTaxonomyMeta {
          color
          featuredImage {
            ${FEATURED_IMAGE_COMMONT}
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasPreviousPage
      hasNextPage
      startCursor
      total
    }
  }
}
`;

  GET_LIST_TAGS = `query GET_LIST_TAGS(
  $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language}
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
   
  ) {
  tags(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: { 
      language: $language,
      search: $search, 
      exclude: $exclude
    }
    ) {
    edges {
      node {
        id
        count
        databaseId
        description
        link
        name
        slug
        tagId
        termTaxonomyId
        ncTaxonomyMeta {
          color
          featuredImage {
            ${FEATURED_IMAGE_COMMONT}
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
      total
    }
  }
}
`;
}

// =========================== USER ============================

const USERS_QUERY_FILTER__string = `query GET_USERS_QUERY_FILTER(
	$after: String = "",
	$before: String = "",
	$first: Int = 10,
	$last: Int = null
	$field: UsersConnectionOrderbyEnum = DISPLAY_NAME,
	$order: OrderEnum = ASC,
	$roleIn: [UserRoleEnum] = [],
  $search: String = null,
  $exclude: [Int] = null,
   
) {
	users(
		where: {
      orderby: { field: $field, order: $order },
      roleIn: $roleIn,
      search: $search,
      exclude: $exclude
    }
		last: $last
		first: $first
		before: $before
		after: $after
	) {
		${EDGES_USER_COMMONT_FIELDS}
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
      total
    }
	}
}`;

export {
  POSTS_SECTION_BY_SEARCH_NO_FILTER__string,
  POSTS_SECTION_BY_FILTER__string,
  GET_LIST_CATEGORIES,
  GET_LIST_CATEGORIES_NO_PARENT,
  GET_LIST_TAGS,
  USERS_QUERY_FILTER__string,
};
