const t=["#ffdd00","#fbb034","#ff4c4c","#c1d82f","#f48924","#7ac143","#30c39e","#06BCAE","#0695BC","#037ef3","#146eb4","#8e43e7","#ea1d5d","#fc636b","#ff6319","#e01f3d","#a0ac48","#00d1b2","#472f92","#388ed1","#a6192e","#4a8594","#7B9FAB","#1393BD","#5E13BD","#E208A7"],e=`
node {
id
altText
caption
databaseId
sizes
sourceUrl
srcSet}
`,o=`
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
            ${e}
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
        ${e}
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
        ${e}
      }
      image2 {
        ${e}
      }
      image3 {
        ${e}
      }
      image4 {
        ${e}
      }
      image5 {
        ${e}
      }
      image6 {
        ${e}
      }
      image7 {
        ${e}
      }
      image8 {
        ${e}
      }
    }
`,a=`
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
            ${e}
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
        ${e}
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
        ${e}
      }
      image2 {
        ${e}
      }
      image3 {
        ${e}
      }
      image4 {
        ${e}
      }
      image5 {
        ${e}
      }
      image6 {
        ${e}
      }
      image7 {
        ${e}
      }
      image8 {
        ${e}
      }
    }
`,n=` edges {
  node {
    ${a}
  }
}`,d=`edges {
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
        ${e}
			}
			backgroundImage {
        ${e}
			}
		}
    posts {
      pageInfo {
        total
      }
    }
	}
}`,s=`edges {
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
              ${e}
            }
        }
    }
}`;export{n as E,e as F,s as a,o as b,d as c,t as d};
