export interface Comments {
  edges: Edge[];
  pageInfo: PageInfo;
}

export interface Edge {
  node: CommentNode;
}

export interface CommentNode {
  parentId?: string;
  parentDatabaseId: number;
  isRestricted: boolean;
  approved: boolean;
  author: Author;
  commentId: number;
  content: string;
  databaseId: number;
  date: string;
  type: string;
}

export interface Author {
  node: Node2;
}

export interface Node2 {
  name: string;
  url?: string;
  id: string;
  email: string;
  databaseId: number;
  avatar?: Avatar;
  ncUserMeta?: NcUserMeta;
  userId?: number;
  username?: string;
  uri?: string;
  slug?: string;
}

export interface Avatar {
  url: string;
}

export interface NcUserMeta {
  featuredImage?: FeaturedImage;
}

export interface FeaturedImage {
  sourceUrl: string;
}

export interface PageInfo {
  startCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  endCursor: string;
}
