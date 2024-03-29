import { ImageState } from "components/ImageUploadToServer";

export type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}

// ==================================================================================================================

export interface GraphQlPageInfo {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}

//
export interface UserViewer {
  avatar?: {
    url: string;
  };
  id: string;
  databaseId: number;
  email?: string;
  name?: string;
  ncUserMeta?: {
    color: string;
    ncBio: string;
    featuredImage?: {
      sourceUrl: string;
    };
  };
  slug: string;
  uri: string;
  url: string;
  userId: number;
  username?: string;
  nicename?: string;
  nickname?: string;
  locale?: string;
  roles: {
    edges: {
      node: {
        id: string;
        name:
          | "administrator"
          | "editor"
          | "author"
          | "contributor"
          | "subscriber";
      };
    }[];
  };
}

export interface UserFullData {
  id: string;
  description: string;
  nicename: string;
  registeredDate: string;
  firstName: any;
  lastName: any;
  ncUserMeta: NcUserMeta;
  email: string;
  databaseId: number;
  locale: string;
  name: string;
  slug: string;
  uri: string;
  url: string;
  userId: number;
  username: string;
  roles: Roles;
  nickname: string;
}

export interface NcUserMeta {
  buymeacoffeUrl: string;
  facebookUrl: string;
  backgroundImage?: OjbImage;
  githubUrl: string;
  instagramUrl: string;
  linkedinUrl: any;
  mediumUrl: string;
  ncBio: string;
  pinterestUrl: any;
  twitchUrl: any;
  twitterUrl: string;
  vimeoUrl: any;
  websiteUrl: string;
  youtubeUrl: string;
  featuredImage?: OjbImage;
}

export interface OjbImage {
  altText: string;
  id: string;
  databaseId: number;
  sourceUrl: string;
}
interface Roles {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  id: string;
  name: string;
}
