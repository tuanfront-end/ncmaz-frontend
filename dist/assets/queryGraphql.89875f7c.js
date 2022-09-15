import{a6 as e,a7 as r}from"./main.e8298863.js";let a=`
  query MyQueryPostsOnArchivePageNoFilter(
    $last: Int = null,
    $first: Int = 10,
    $before: String = null,
    $notIn: [ID] = null,
    $after: String = null,
    $search: String = null
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
     ${e}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`,t=`
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
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
     ${e}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`,n=`query GET_LIST_CATEGORIES(
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $parent: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
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
`,o=`query GET_LIST_CATEGORIES_NO_PARENT(
  $order: OrderEnum = DESC
  $hideEmpty: Boolean = false,
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
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
`,s=`query GET_LIST_TAGS(
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
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
`,i=!!window.frontendObject.pll_current_language&&!!window.frontendObject.pll_themeoption_actived;i&&(a=`
  query MyQueryPostsOnArchivePageNoFilter(
    $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
    $last: Int = null,
    $first: Int = 10,
    $before: String = null,
    $notIn: [ID] = null,
    $after: String = null,
    $search: String = null
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
     ${e}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`,t=`
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
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
     ${e}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        total
      }
    }
  }
`,n=`query GET_LIST_CATEGORIES(
  $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $parent: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
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
`,o=`query GET_LIST_CATEGORIES_NO_PARENT(
  $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language},
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
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
`,s=`query GET_LIST_TAGS(
  $language: LanguageCodeFilterEnum = ${window.frontendObject.pll_current_language}
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
            sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
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
`);const l=`query GET_USERS_QUERY_FILTER(
	$after: String = "",
	$before: String = "",
	$first: Int = 10,
	$last: Int = null
	$field: UsersConnectionOrderbyEnum = DISPLAY_NAME,
	$order: OrderEnum = ASC,
	$roleIn: [UserRoleEnum] = [],
  $search: String = null,
  $exclude: [Int] = null,
  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL,
  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${window.innerWidth<500?"MEDIUM":"MEDIUM_LARGE"}
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
		${r}
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
      total
    }
	}
}`;export{o as G,t as P,l as U,s as a,n as b,a as c};
