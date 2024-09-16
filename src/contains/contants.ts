import {
  avatarColors,
  EDGES_POST_COMMONT_FIELDS,
  EDGES_POST_COMMONT_FIELDS_NOT_EDGES_HAS_CONTENT,
  EDGES_TERMS_COMMONT_FIELDS,
  EDGES_USER_COMMONT_FIELDS,
} from "./contantsCommon";
import { PLLs } from "./contantsPLL";
// ===================== POSTS =================================================

let GQL_QUERY_GET_POST_BY_DATABASE_ID = `
query GQL_QUERY_GET_POST_BY_DATABASE_ID(
  $idType: PostIdType = DATABASE_ID
  $postId: ID = ""
  ) {
  post(id: $postId, idType: $idType) {
    ${EDGES_POST_COMMONT_FIELDS_NOT_EDGES_HAS_CONTENT}
  }
}
`;

let GQL_QUERY_GET_POSTS_BY_FILTER = `
  query GQL_QUERY_GET_POSTS_BY_FILTER(
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
  ) {
    posts(
      where: {
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

let GQL_QUERY_GET_POSTS_BY_SPECIFIC = `
  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(
    $nameIn: [String] = ""
    ) {
    posts(where: { nameIn: $nameIn }) { ${EDGES_POST_COMMONT_FIELDS} }
  }
`;

// ===================== USERS =================================================

let GQL_QUERY_GET_USERS_BY_FILTER = `query GQL_QUERY_GET_USERS_BY_FILTER(
	$after: String = ""
	$before: String = ""
	$first: Int = 10
	$last: Int = null
	$field: UsersConnectionOrderbyEnum = DISPLAY_NAME
	$order: OrderEnum = ASC
	$roleIn: [UserRoleEnum] = []
) {
	users(
		where: { orderby: { field: $field, order: $order }, roleIn: $roleIn }
		last: $last
		first: $first
		before: $before
		after: $after
	) { ${EDGES_USER_COMMONT_FIELDS} }
}`;

let GQL_QUERY_GET_USERS_BY_SPECIFIC = `query GQL_QUERY_GET_USERS_BY_SPECIFIC(
  $include: [Int] = null
  
  ) {
	users(where: { include: $include }) { ${EDGES_USER_COMMONT_FIELDS} }
}`;

// ===================== TERMS - TAGS | CATEGORIES =========================================

let GQL_QUERY_GET_CATEGORIES_BY_FILTER = `
	query GQL_QUERY_GET_CATEGORIES_BY_FILTER(
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
   
	) {
		categories(
			where: { order: $order, orderby: $orderby }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

let GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC = `
	query GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(
    $termTaxonomId: [ID] = ""
    
    ) {
		categories(where: { termTaxonomyId: $termTaxonomId }) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

// TAGS
let GQL_QUERY_GET_TAGS_BY_FILTER = `
	query GQL_QUERY_GET_TAGS_BY_FILTER(
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
  
	) {
		tags(
			where: { order: $order, orderby: $orderby }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

let GQL_QUERY_GET_TAGS_BY_SPECIFIC = `
	query GQL_QUERY_GET_TAGS_BY_SPECIFIC(
    $termTaxonomId: [ID] = ""
    
    ) {
		tags(where: { termTaxonomyId: $termTaxonomId }) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

// CHECK ENABLE POLYLANG
let IS_ENABLE_PLL =
  !!window.frontendObject.pll_current_language &&
  !!window.frontendObject.pll_themeoption_actived;
//
if (IS_ENABLE_PLL) {
  GQL_QUERY_GET_POSTS_BY_FILTER = PLLs.PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER;
  GQL_QUERY_GET_POSTS_BY_SPECIFIC =
    PLLs.PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC;
  GQL_QUERY_GET_CATEGORIES_BY_FILTER =
    PLLs.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER;
  GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC =
    PLLs.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC;
  GQL_QUERY_GET_TAGS_BY_FILTER = PLLs.PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER;
  GQL_QUERY_GET_TAGS_BY_SPECIFIC = PLLs.PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC;
  //
}

export {
  avatarColors,
  //
  GQL_QUERY_GET_POST_BY_DATABASE_ID,
  EDGES_POST_COMMONT_FIELDS,
  GQL_QUERY_GET_POSTS_BY_FILTER,
  GQL_QUERY_GET_POSTS_BY_SPECIFIC,
  //
  EDGES_USER_COMMONT_FIELDS,
  GQL_QUERY_GET_USERS_BY_FILTER,
  GQL_QUERY_GET_USERS_BY_SPECIFIC,
  //
  EDGES_TERMS_COMMONT_FIELDS,
  GQL_QUERY_GET_CATEGORIES_BY_FILTER,
  GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,
  GQL_QUERY_GET_TAGS_BY_FILTER,
  GQL_QUERY_GET_TAGS_BY_SPECIFIC,
};
