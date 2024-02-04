import { FEATURED_IMAGE_COMMONT } from "contains/contantsCommon";

const postFields = ` edges {
  node {
    id
    link
    date
    featuredImage {
      node {
        ${FEATURED_IMAGE_COMMONT}
      } 
    }
    postFormats {
      edges {
        node {
          id
          name 
        } 
      } 
    }
    postId
    slug
    title 
  } 
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
      } 
    }
  }
`;

const POSTS_SECTION_SPECIFIC__string = `
  query Megamenu_Specific(
    $nameIn: [String] = ""
    ) {
    posts(where: { nameIn: $nameIn, orderby: {field: NAME_IN, order: ASC} }) {
      ${postFields}
    }
  }
`;

export { POSTS_SECTION_BY_FILTER__string, POSTS_SECTION_SPECIFIC__string };
