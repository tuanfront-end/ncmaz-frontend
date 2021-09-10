const COMMENT_QUERY = `query MyQuery($after: String = null, $before: String = null, $first: Int = 10, $last: Int = null, $order: OrderEnum = DESC, $contentId: ID = null) {
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

const CREATE_COMMENT_QUERY = `mutation MyMutation($author: String = "", $authorEmail: String = "", $authorUrl: String = "", $clientMutationId: String = "", $commentOn: Int = 10, $content: String = "", $parent: ID = "") {
    createComment(
      input: {author: $author, authorEmail: $authorEmail, authorUrl: $authorUrl, clientMutationId: $clientMutationId, commentOn: $commentOn, content: $content, parent: $parent}
    ) {
      clientMutationId
      success
      comment {
        approved
        parentId
        parentDatabaseId
        id
        date
        databaseId
        content
        commentId
        author {
          node {
            url
            name
            id
            email
            databaseId
            ... on User {
              id
              email
              avatar {
                url
              }
              name
              ncUserMeta {
                featuredImage {
                  sourceUrl
                }
              }
              url
              userId
              username
            }
             ... on CommentAuthor {
              id
              email
              databaseId
              name
              url
            }
          }
        }
      }
    }
  }
  `;

export { COMMENT_QUERY, CREATE_COMMENT_QUERY };
