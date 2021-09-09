const COMMENT_QUERY = `query MyQuery($after: String = null, $before: String = null, $first: Int = 10, $last: Int = null, $order: OrderEnum = ASC, $contentId: ID = null) {
    comments(
      after: $after
      before: $before
      first: $first
      last: $last
      where: {order: $order, contentId: $contentId, status: "all"}
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
  }`;

export { COMMENT_QUERY };
