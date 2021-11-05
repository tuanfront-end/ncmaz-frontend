const avatarColors = [
  "#ffdd00",
  "#fbb034",
  "#ff4c4c",
  "#c1d82f",
  "#f48924",
  "#7ac143",
  "#30c39e",
  "#06BCAE",
  "#0695BC",
  "#037ef3",
  "#146eb4",
  "#8e43e7",
  "#ea1d5d",
  "#fc636b",
  "#ff6319",
  "#e01f3d",
  "#a0ac48",
  "#00d1b2",
  "#472f92",
  "#388ed1",
  "#a6192e",
  "#4a8594",
  "#7B9FAB",
  "#1393BD",
  "#5E13BD",
  "#E208A7",
];

// ===================== POSTS =================================================
const EDGES_POST_COMMONT_FIELDS = ` edges {
  node {
    id
    link
    author {
      node {
        id
        avatar {
          url
        }
        url
        uri
        username
        name
        slug
        ncUserMeta {
          featuredImage {
            sourceUrl(size: $author_ncUserMeta_featuredImage_size)
          }
        }
      }
    }
    categories {
      edges {
        node {
          id
          link
          name
          uri
          slug
          count
          categoryId
          ncTaxonomyMeta {
            color
          }
        }
      }
    }
    commentCount
    date
    excerpt
    featuredImage {
      node {
        id
        altText
        caption
        sourceUrl(size: $featuredImage_size)
      }
    }
    postFormats {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
    postId
    slug
    title
    ncmazVideoUrl {
      fieldGroupName
      videoUrl
    }
    ncmazAudioUrl {
      fieldGroupName
      audioUrl
    }
    ncPostMetaData {
      favoriteButtonShortcode
      readingTimeShortcode
      viewsCount
      fieldGroupName
    }
    ncmazGalleryImgs {
      fieldGroupName
      image1 {
        id
        sourceUrl(size: $ncmazGalleryImgs_size)
      }
      image2 {
        id
         sourceUrl(size: $ncmazGalleryImgs_size)
      }
      image3 {
        id
         sourceUrl(size: $ncmazGalleryImgs_size)
      }
      image4 {
        id
         sourceUrl(size: $ncmazGalleryImgs_size)
      }
      image5 {
        id
         sourceUrl(size: $ncmazGalleryImgs_size)
      }
      image6 {
        id
         sourceUrl(size: $ncmazGalleryImgs_size)
      }
      image7 {
        id
         sourceUrl(size: $ncmazGalleryImgs_size)
      }
      image8 {
        id
         sourceUrl(size: $ncmazGalleryImgs_size)
      }
    }
  }
}`;

const GQL_QUERY_GET_POSTS_BY_FILTER = `
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
    $nameIn: [String] = ""
    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
    $featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
    ) {
    posts(where: { nameIn: $nameIn }) { ${EDGES_POST_COMMONT_FIELDS} }
  }
`;

// ===================== USERS =================================================
const EDGES_USER_COMMONT_FIELDS = `edges {
	node {
		id
		name
		username
		userId
		url
		uri
		ncUserMeta {
			color
			ncBio
			featuredImage {
				sourceUrl(size: $author_ncUserMeta_featuredImage_size)
				id
			}
			backgroundImage {
				sourceUrl(size: $author_ncUserMeta_backgroundImage_size)
			}
		}
    posts {
      pageInfo {
        total
      }
    }
	}
}`;

const GQL_QUERY_GET_USERS_BY_FILTER = `query GQL_QUERY_GET_USERS_BY_FILTER(
	$after: String = ""
	$before: String = ""
	$first: Int = 10
	$last: Int = null
	$field: UsersConnectionOrderbyEnum = DISPLAY_NAME
	$order: OrderEnum = ASC
	$roleIn: [UserRoleEnum] = []
  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }
) {
	users(
		where: { orderby: { field: $field, order: $order }, roleIn: $roleIn }
		last: $last
		first: $first
		before: $before
		after: $after
	) { ${EDGES_USER_COMMONT_FIELDS} }
}`;

const GQL_QUERY_GET_USERS_BY_SPECIFIC = `query GQL_QUERY_GET_USERS_BY_SPECIFIC(
  $include: [Int] = null
  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL
  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }
  ) {
	users(where: { include: $include }) { ${EDGES_USER_COMMONT_FIELDS} }
}`;

// ===================== TERMS - TAGS | CATEGORIES =========================================
const EDGES_TERMS_COMMONT_FIELDS = `edges {
    node {
        id
        count
        name
        databaseId
        description
        link
        ncTaxonomyMeta {
            color                                     
            featuredImage {
              sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)
            }
        }
    }
}`;

const GQL_QUERY_GET_CATEGORIES_BY_FILTER = `
	query GQL_QUERY_GET_CATEGORIES_BY_FILTER(
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
			where: { order: $order, orderby: $orderby }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

const GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC = `
	query GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(
    $termTaxonomId: [ID] = ""
    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
    ) {
		categories(where: { termTaxonomId: $termTaxonomId }) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

// TAGS
const GQL_QUERY_GET_TAGS_BY_FILTER = `
	query GQL_QUERY_GET_TAGS_BY_FILTER(
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
			where: { order: $order, orderby: $orderby }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

const GQL_QUERY_GET_TAGS_BY_SPECIFIC = `
	query GQL_QUERY_GET_TAGS_BY_SPECIFIC(
    $termTaxonomId: [ID] = ""
    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }
    ) {
		tags(where: { termTaxonomId: $termTaxonomId }) { ${EDGES_TERMS_COMMONT_FIELDS} }
	}
`;

export {
  avatarColors,
  //
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
