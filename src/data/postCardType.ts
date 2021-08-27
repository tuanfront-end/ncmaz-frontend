export interface ListPosts {
  edges: Post[];
  pageInfo?: PageInfo;
  __typename: string;
}

interface Post {
  node: PostNode;
  __typename: string;
}

export interface PostNode {
  id: string;
  link: string;
  author: Author;
  categories: Categories;
  commentCount: any;
  date: string;
  excerpt: string;
  featuredImage?: FeaturedImage;
  postFormats: PostFormats;
  postId: number;
  slug: string;
  title: string;
  ncmazVideoUrl: {
    fieldGroupName: string;
    videoUrl?: string;
  };
  ncmazAudioUrl: {
    fieldGroupName: string;
    audioUrl?: string;
  };
  ncmazGalleryImgs: {
    fieldGroupName: string;
    image1?: { id: string; sourceUrl: string };
    image2?: { id: string; sourceUrl: string };
    image3?: { id: string; sourceUrl: string };
    image4?: { id: string; sourceUrl: string };
    image5?: { id: string; sourceUrl: string };
    image6?: { id: string; sourceUrl: string };
    image7?: { id: string; sourceUrl: string };
    image8?: { id: string; sourceUrl: string };
    image9?: { id: string; sourceUrl: string };
    image10?: { id: string; sourceUrl: string };
  };
  __typename: string;
}

interface Author {
  node: AuthorNode2;
  __typename: string;
}

interface AuthorNode2 {
  id: string;
  avatar: Avatar;
  url: any;
  uri: string;
  username: string;
  name: string;
  slug: string;
  __typename: string;
}

interface Avatar {
  default: string;
  extraAttr: any;
  forceDefault: boolean;
  foundAvatar: boolean;
  height: number;
  size: number;
  url: string;
  width: number;
  __typename: string;
}

interface Categories {
  edges: Edge2[];
  __typename: string;
}

interface Edge2 {
  node: Node3;
  __typename: string;
}

interface Node3 {
  id: string;
  link: string;
  name: string;
  uri: string;
  slug: string;
  count: number;
  categoryId: number;
  __typename: string;
}

interface FeaturedImage {
  node: Node4;
  __typename: string;
}

interface Node4 {
  id: string;
  altText: string;
  caption: string;
  sourceUrl: string;
  __typename: string;
}

export type PostFormatsType = "Gallery" | "Video" | "Audio" | "Standard";

interface PostFormats {
  edges:
    | {
        node: {
          id: string;
          name: PostFormatsType;
        };
      }[]
    | [];
  __typename: string;
}

interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
  startCursor: string;
  __typename: string;
}

interface Extensions {
  debug: Debug[];
}

interface Debug {
  type: string;
  message: string;
}
