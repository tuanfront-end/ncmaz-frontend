import{E as _,a as e,b as t,c as n}from"./contantsCommon-f7fdd476.js";const E=`
  query GQL_QUERY_GET_POSTS_BY_FILTER(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language}
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
     ${_}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`,a=`
  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language}
    $nameIn: [String] = ""
   
    ) {
    posts(where: {
      language: $language
      nameIn: $nameIn
     }) { ${_} }
  }
`,o=`
	query GQL_QUERY_GET_CATEGORIES_BY_FILTER(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language}
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
  
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
		) { ${e} }
	}
`,I=`
	query GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language}
    $termTaxonomId: [ID] = ""
   
    ) {
		categories(where: {
      language: $language
      termTaxonomyId: $termTaxonomId
     }) { ${e} }
	}
`,$=`
	query GQL_QUERY_GET_TAGS_BY_FILTER(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language}
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
   
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
		) { ${e} }
	}
`,T=`
	query GQL_QUERY_GET_TAGS_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language}
    $termTaxonomId: [ID] = ""
   
    ) {
		tags(where: {
      language: $language
      termTaxonomyId: $termTaxonomId
     }) { ${e} }
	}
`,r={PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER:E,PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC:a,PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER:o,PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC:I,PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER:$,PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC:T};let f=`
query GQL_QUERY_GET_POST_BY_DATABASE_ID(
  $idType: PostIdType = DATABASE_ID
  $postId: ID = ""
  ) {
  post(id: $postId, idType: $idType) {
    ${t}
  }
}
`,l=`
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
     ${_}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`,G=`
  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(
    $nameIn: [String] = ""
    ) {
    posts(where: { nameIn: $nameIn }) { ${_} }
  }
`,C=`query GQL_QUERY_GET_USERS_BY_FILTER(
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
	) { ${n} }
}`,Y=`query GQL_QUERY_GET_USERS_BY_SPECIFIC(
  $include: [Int] = null
  
  ) {
	users(where: { include: $include }) { ${n} }
}`,S=`
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
		) { ${e} }
	}
`,s=`
	query GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(
    $termTaxonomId: [ID] = ""
    
    ) {
		categories(where: { termTaxonomyId: $termTaxonomId }) { ${e} }
	}
`,d=`
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
		) { ${e} }
	}
`,u=`
	query GQL_QUERY_GET_TAGS_BY_SPECIFIC(
    $termTaxonomId: [ID] = ""
    
    ) {
		tags(where: { termTaxonomyId: $termTaxonomId }) { ${e} }
	}
`,g=!!window.frontendObject.pll_current_language&&!!window.frontendObject.pll_themeoption_actived;g&&(l=r.PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER,G=r.PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC,S=r.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER,s=r.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,d=r.PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER,u=r.PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC);export{l as G,G as a,f as b,S as c,s as d,d as e,u as f,Y as g,C as h};
