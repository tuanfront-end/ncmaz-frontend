import { FullImageNode } from "data/types";

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
  featuredImage?: FullImageNode;
}

export interface PageInfo {
  startCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  endCursor: string;
  total?: number;
}
