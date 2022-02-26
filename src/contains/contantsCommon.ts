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

export {
  avatarColors,
  //
  EDGES_POST_COMMONT_FIELDS,
  //
  EDGES_USER_COMMONT_FIELDS,
  //
  EDGES_TERMS_COMMONT_FIELDS,
};
