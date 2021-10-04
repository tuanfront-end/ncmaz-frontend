const postFields = ` edges {
  node {
    id
    link
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
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    commentCount
    date
    excerpt
    featuredImage {
      node {
        id
        altText
        caption
        sourceUrl
        __typename
      }
      __typename
    }
    postFormats {
      edges {
        node {
          id
          name
          __typename
        }
        __typename
      }
      __typename
    }
    postId
    slug
    title
    __typename
  }
  __typename
}`;

const POSTS_SECTION_BY_FILTER__string = `
  query Megamenu_Filter(
    $field: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $categoryIn: [ID] = []
    $tagIn: [ID] = []
    $authorIn: [ID] = []
    $last: Int = null
    $first: Int = 10
    $before: String = null
    $after: String = null
  ) {
    posts(
      where: {
        orderby: { field: $field, order: $order }
        categoryIn: $categoryIn
        tagIn: $tagIn
        authorIn: $authorIn
      }
      last: $last
      first: $first
      before: $before
      after: $after
    ) {
     ${postFields}
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
        __typename
      }
      __typename
    }
  }
`;

const POSTS_SECTION_SPECIFIC__string = `
  query Megamenu_Specific($nameIn: [String] = "") {
    posts(where: { nameIn: $nameIn }) {
      ${postFields}
    }
  }
`;

export { POSTS_SECTION_BY_FILTER__string, POSTS_SECTION_SPECIFIC__string };
