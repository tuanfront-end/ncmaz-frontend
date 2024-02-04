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

//
const FEATURED_IMAGE_COMMONT = `
id
altText
caption
databaseId
sizes
sourceUrl
srcSet
`;

// ===================== POSTS =================================================
const EDGES_POST_COMMONT_FIELDS_NOT_EDGES_HAS_CONTENT = `
    id
    link
    content
    status
    commentStatus
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
            ${FEATURED_IMAGE_COMMONT}
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
    tags {
      edges {
        node {
          id
          link
          name
          uri
          slug
          count
          tagId
        }
      }
    }
    commentCount
    date
    excerpt
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
          slug
        }
      }
    }
    postId
    slug
    title
    ncmazVideoUrl {
      videoUrl
    }
    ncmazAudioUrl {
      audioUrl
    }
    ncPostMetaData {
      favoriteButtonShortcode
      readingTimeShortcode
      viewsCount
    }
    ncmazGalleryImgs {
      image1 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image2 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image3 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image4 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image5 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image6 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image7 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image8 {
        ${FEATURED_IMAGE_COMMONT}
      }
    }
`;

const EDGES_POST_COMMONT_FIELDS_NOT_EDGES = `
    id
    link
    status
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
            ${FEATURED_IMAGE_COMMONT}
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
        ${FEATURED_IMAGE_COMMONT}
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
      videoUrl
    }
    ncmazAudioUrl {
      audioUrl
    }
    ncPostMetaData {
      favoriteButtonShortcode
      readingTimeShortcode
      viewsCount
    }
    ncmazGalleryImgs {
      image1 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image2 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image3 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image4 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image5 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image6 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image7 {
        ${FEATURED_IMAGE_COMMONT}
      }
      image8 {
        ${FEATURED_IMAGE_COMMONT}
      }
    }
`;

const EDGES_POST_COMMONT_FIELDS = ` edges {
  node {
    ${EDGES_POST_COMMONT_FIELDS_NOT_EDGES}
  }
}`;

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
        ${FEATURED_IMAGE_COMMONT}
			}
			backgroundImage {
        ${FEATURED_IMAGE_COMMONT}
			}
		}
    posts {
      pageInfo {
        total
      }
    }
	}
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
              ${FEATURED_IMAGE_COMMONT}
            }
        }
    }
}`;

export {
  avatarColors,
  //
  FEATURED_IMAGE_COMMONT,
  EDGES_POST_COMMONT_FIELDS,
  EDGES_POST_COMMONT_FIELDS_NOT_EDGES,
  EDGES_POST_COMMONT_FIELDS_NOT_EDGES_HAS_CONTENT,
  //
  EDGES_USER_COMMONT_FIELDS,
  //
  EDGES_TERMS_COMMONT_FIELDS,
};
