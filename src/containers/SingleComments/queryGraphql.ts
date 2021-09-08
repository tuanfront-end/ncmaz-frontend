const COMMENT_QUERY = `query MyQuery($after: String = null, $before: String = null, $first: Int = 10, $last: Int = null, $order: OrderEnum = DESC, $contentId: ID = null) {
    comments(
      after: $after
      before: $before
      first: $first
      last: $last
      where: {order: $order, contentId: $contentId}
    ) {
      edges {
        node {
          id
          parentId
          parentDatabaseId
          isRestricted
          approved
          author {
            node {
              name
              url
              id
              email
              databaseId
              ... on User {
                id
                email
                avatar {
                  url
                }
                databaseId
                name
                ncUserMeta {
                  featuredImage {
                    sourceUrl
                  }
                }
                userId
                username
                url
                uri
                slug
              }
              ... on CommentAuthor {
                id
                email
                databaseId
                url
                name
              }
            }
          }
          commentId
          content
          databaseId
          date
          type
        }
      }
      pageInfo {
        startCursor
        hasPreviousPage
        hasNextPage
        endCursor
      }
    }
  }
  `;

export { COMMENT_QUERY };
