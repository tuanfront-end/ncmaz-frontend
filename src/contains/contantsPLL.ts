import {
  EDGES_POST_COMMONT_FIELDS,
  EDGES_TERMS_COMMONT_FIELDS,
} from "./contantsCommon";
// ===================== POSTS =================================================

const GQL_QUERY_GET_POSTS_BY_FILTER = `
  query GQL_QUERY_GET_POSTS_BY_FILTER(
    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }
    $field: PostObjectsConnectionOrderbyEnum = AUTHOR
    $order: OrderEnum = ASC
    $categoryIn: [ID] = []
    $tagIn: [ID] = []
    $authorIn: [ID] = []
    $notIn: [ID] = []
    $last: Int = null
    $first: Int = 10
    $before: String = ""
    $after: String = ""
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
  ) {
    posts(
      where: {
        language: $language
        orderby: { field: $field, order: $order }
        categoryIn: $categoryIn
        tagIn: $tagIn
        authorIn: $authorIn
        notIn: $notIn
      }
      last: $last
      first: $first
      before: $before
      after: $after
    ) {
     ${EDGES_POST_COMMONT_FIELDS}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

const GQL_QUERY_GET_POSTS_BY_SPECIFIC = `
  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }
    $nameIn: [String] = ""
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
    ) {
    posts(where: {
      language: $language
      nameIn: $nameIn
     }) { ${EDGES_POST_COMMONT_FIELDS} }
  }
`;

// ===================== TERMS - TAGS | CATEGORIES =========================================

const GQL_QUERY_GET_CATEGORIES_BY_FILTER = `
	query GQL_QUERY_GET_CATEGORIES_BY_FILTER(
    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
	) {
		categories(
			where: {
        language: $language
         order: $order
         orderby: $orderby 
        }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

const GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC = `
	query GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }
    $termTaxonomId: [ID] = ""
    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
    ) {
		categories(where: {
      language: $language
      termTaxonomId: $termTaxonomId
     }) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

// TAGS
const GQL_QUERY_GET_TAGS_BY_FILTER = `
	query GQL_QUERY_GET_TAGS_BY_FILTER(
    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
	) {
		tags(
			where: { 
        language: $language,
        order: $order, 
        orderby: $orderby 
      }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

const GQL_QUERY_GET_TAGS_BY_SPECIFIC = `
	query GQL_QUERY_GET_TAGS_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }
    $termTaxonomId: [ID] = ""
    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
    ) {
		tags(where: {
      language: $language
      termTaxonomId: $termTaxonomId
     }) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

export const PLLs = {
  PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER: GQL_QUERY_GET_POSTS_BY_FILTER,
  PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC: GQL_QUERY_GET_POSTS_BY_SPECIFIC,
  //
  PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER:
    GQL_QUERY_GET_CATEGORIES_BY_FILTER,
  PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC:
    GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,
  PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER: GQL_QUERY_GET_TAGS_BY_FILTER,
  PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC: GQL_QUERY_GET_TAGS_BY_SPECIFIC,
  //
  // PLL_GET__GQL_QUERY_SEARCH_CATEGORIES: GQL_QUERY_SEARCH_CATEGORIES,
  // PLL_GET__GQL_QUERY_SEARCH_TAGS: GQL_QUERY_SEARCH_TAGS,
  // PLL_GET__GQL_QUERY_SEARCH_POSTS: GQL_QUERY_SEARCH_POSTS,
};
