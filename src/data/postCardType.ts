import { PageInfo } from "containers/SingleComments/commentType";
import { FullImageNode } from "./types";

export interface ListPosts {
  edges: Post[];
  pageInfo?: PageInfo;
}
export interface ListTerms {
  edges: CategoriesEdge2[];
  pageInfo?: PageInfo;
}

export interface Post {
  node: PostNode;
}

export interface PostNodeFullData {
  id: string;
  link: string;
  status: string;
  commentStatus: string;
  content: string;
  tags: Tags;
  author?: Author;
  categories?: Categories;
  commentCount?: any;
  date?: string;
  excerpt?: string;
  featuredImage?: FeaturedImage;
  postFormats?: PostFormats;
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
  ncPostMetaData: {
    favoriteButtonShortcode?: string;
    readingTimeShortcode?: string;
    viewsCount?: number;
    fieldGroupName: "ncPostMetaData";
  };
  ncmazGalleryImgs: {
    fieldGroupName: string;
    image1?: FullImageNode;
    image2?: FullImageNode;
    image3?: FullImageNode;
    image4?: FullImageNode;
    image5?: FullImageNode;
    image6?: FullImageNode;
    image7?: FullImageNode;
    image8?: FullImageNode;
    image9?: FullImageNode;
    image10?: FullImageNode;
  };
  __typename: string;
}
export interface PostNode {
  id: string;
  link: string;
  status: string;
  author?: Author;
  categories?: Categories;
  commentCount?: any;
  date?: string;
  excerpt?: string;
  featuredImage?: FeaturedImage;
  postFormats?: PostFormats;
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
  ncPostMetaData: {
    favoriteButtonShortcode?: string;
    readingTimeShortcode?: string;
    viewsCount?: number;
    fieldGroupName: "ncPostMetaData";
  };
  ncmazGalleryImgs: {
    fieldGroupName: string;
    image1?: FullImageNode;
    image2?: FullImageNode;
    image3?: FullImageNode;
    image4?: FullImageNode;
    image5?: FullImageNode;
    image6?: FullImageNode;
    image7?: FullImageNode;
    image8?: FullImageNode;
    image9?: FullImageNode;
    image10?: FullImageNode;
  };
  __typename: string;
}

interface Author {
  node: AuthorNode2;
  __typename?: string;
}

interface AuthorNode2 {
  id: string;
  avatar?: Avatar;
  url: any;
  uri: string;
  username: string;
  name: string;
  slug: string;
  ncUserMeta?: {
    featuredImage?: FullImageNode;
  };
  __typename: string;
}

export interface AuthorNode {
  id: string;
  name: string;
  avatar?: Avatar;
  ncUserMeta: NcUserMeta;
  url: string;
  uri: string;
  username: string;
  description?: string;
  userId: number;
  posts?: {
    pageInfo: {
      total: number;
    };
  };
}

export interface NcUserMeta {
  color?: string;
  ncBio?: string;
  featuredImage?: FullImageNode;
  backgroundImage?: FullImageNode;
  //
  youtubeUrl?: string;
  facebookUrl?: string;
  mediumUrl?: string;
  githubUrl?: string;
  vimeoUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  pinterestUrl?: string;
  twitchUrl?: string;
  websiteUrl?: string;
  buymeacoffeUrl?: string;
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
  __typename?: string;
}

interface Categories {
  edges: CategoriesEdge2[];
  __typename?: string;
}

export interface CategoriesEdge2 {
  node: CategoriesNode3;
  __typename?: string;
}

export interface CategoriesNode3 {
  id: string;
  link: string;
  name: string;
  uri: string;
  slug: string;
  count: number;
  categoryId: number;
  ncTaxonomyMeta: NcTaxonomyMeta;
  __typename?: string;
}

export interface Tags {
  edges: {
    node: TagNode3;
    __typename?: string;
  }[];
  __typename?: string;
}

export interface TagNode3 {
  id: string;
  link: string;
  name: string;
  uri: string;
  slug: string;
  count: number;
  tagId: number;
  ncTaxonomyMeta: NcTaxonomyMeta;
  __typename?: string;
}

export interface TermNode {
  id: string;
  link: string;
  name: string;
  uri: string;
  slug: string;
  count: number;
  databaseId: number;
  ncTaxonomyMeta: NcTaxonomyMeta;
  __typename?: string;
}

export interface NcTaxonomyMeta {
  color?: string;
  featuredImage?: FullImageNode;
}

export interface FeaturedImage {
  node: FullImageNode;
  __typename?: string;
}

export type PostFormatsType =
  | "post-format-gallery"
  | "post-format-video"
  | "post-format-audio"
  | "Standard";

interface PostFormats {
  edges:
    | {
        node: {
          id: string;
          name: string;
          slug: PostFormatsType;
        };
      }[]
    | [];
  __typename: string;
}

interface Extensions {
  debug: Debug[];
}

interface Debug {
  type: string;
  message: string;
}
