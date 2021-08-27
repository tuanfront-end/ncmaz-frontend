import { gql } from "@apollo/client";

const postFields = ` edges {
  node {
    id
    link
    author {
      node {
        id
        avatar {
          default
          extraAttr
          forceDefault
          foundAvatar
          height
          size
          url
          width
        }
        url
        uri
        username
        name
        slug
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
        sourceUrl
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
    ncmazVideoUrl {
      fieldGroupName
      videoUrl
    }
    ncmazAudioUrl{
      fieldGroupName
      audioUrl
    }
    ncmazGalleryImgs{
      fieldGroupName
      image1 {
        id
        sourceUrl
      }
      image2 {
        id
        sourceUrl
      }
      image3 {
        id
        sourceUrl
      }
      image4 {
        id
        sourceUrl
      }
      image5 {
        id
        sourceUrl
      }
      image6 {
        id
        sourceUrl
      }
      image7 {
        id
        sourceUrl
      }
      image8 {
        id
        sourceUrl
      }
      image9 {
        id
        sourceUrl
      }
      image10 {
        id
        sourceUrl
      }
    }
  }
}`;

const POSTS_SECTION_BY_FILTER = gql`
  query MyQuery(
    $field: PostObjectsConnectionOrderbyEnum = AUTHOR
    $order: OrderEnum = ASC
    $categoryIn: [ID] = ""
    $tagIn: [ID] = ""
    $authorIn: [ID] = ""
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

const POSTS_SECTION_SPECIFIC = gql`
  query MyQuery($nameIn: [String] = "") {
    posts(where: { nameIn: $nameIn }) {
      ${postFields}
    }
  }
`;

export { POSTS_SECTION_BY_FILTER, POSTS_SECTION_SPECIFIC };
