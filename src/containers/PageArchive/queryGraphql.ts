import {
  EDGES_POST_COMMONT_FIELDS,
  EDGES_USER_COMMONT_FIELDS,
} from "contains/contants";

const POSTS_SECTION_BY_FILTER__string = `
  query MyQueryPostsOnArchivePage(
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
    $featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
  ) {
    posts(
      where: {
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
const GET_LIST_CATEGORIES = `query GET_LIST_CATEGORIES(
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $parent: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }
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
`;

const GET_LIST_CATEGORIES_NO_PARENT = `query GET_LIST_CATEGORIES_NO_PARENT(
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $orderby: TermObjectsConnectionOrderbyEnum = NAME,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }
  ) {
  categories(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    where: { orderby: $orderby, order: DESC, search: $search, exclude: $exclude }
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
`;

const GET_LIST_TAGS = `query GET_LIST_TAGS(
  $after: String = "",
  $before: String = "",
  $first: Int = 30,
  $last: Int = null,
  $search: String = null,
  $exclude: [ID] = "",
  $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }
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
`;

// ===========================USER============================

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
  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL,
  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }
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
  POSTS_SECTION_BY_FILTER__string,
  GET_LIST_CATEGORIES,
  GET_LIST_CATEGORIES_NO_PARENT,
  GET_LIST_TAGS,
  USERS_QUERY_FILTER__string,
};
