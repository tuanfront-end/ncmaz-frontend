import React from "react";
import { FC, useRef, useEffect } from "react";
import { useAppSelector } from "app/hooks";
import { selectRecentstaticPosts } from "app/staticPosts/staticPosts";
import { gql, useLazyQuery } from "@apollo/client";

export interface PostCardLikeActionProps {
  favoriteButtonShortcode: string;
  className?: string;
  onClick?: () => void;
  postId: number;
}

interface Data {
  post: Post;
}

interface Post {
  ncPostMetaData: NcPostMetaData;
  id: string;
}

interface NcPostMetaData {
  favoriteButtonShortcode: string;
}

//
let NEW_UPDATE_LIKE_BUTTONS: Record<number, string> = {};

const PostCardLikeAction: FC<PostCardLikeActionProps> = ({
  favoriteButtonShortcode,
  className = "relative",
  onClick = () => {},
  postId,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  let _timeOut: NodeJS.Timeout | null = null;

  //
  const recentstaticPosts = useAppSelector(selectRecentstaticPosts);
  //
  const queryGql = gql`
    query GetFavoriteButtonShortcode($id: ID = "") {
      post(id: $id, idType: DATABASE_ID) {
        ncPostMetaData {
          favoriteButtonShortcode
        }
        id
      }
    }
  `;
  const [getFavoriteButtonShortcode, { loading, error, data }] =
    useLazyQuery<Data>(queryGql);
  //

  useEffect(() => {
    if (!recentstaticPosts.includes(postId)) {
      return;
    }
    getFavoriteButtonShortcode({ variables: { id: postId } });
  }, []);

  useEffect(() => {
    return () => {
      _timeOut && clearTimeout(_timeOut);
    };
  }, []);

  const handleClick = () => {
    if (!divRef.current || !jQuery || !!loading) {
      return;
    }
    onClick && onClick();

    // LAM CAI NAY DE UPDATE BUTTON LIKE KHI RE-RENDER LAI POST
    jQuery(document).one("ajaxStop", function () {
      _timeOut = setTimeout(() => {
        NEW_UPDATE_LIKE_BUTTONS = {
          ...NEW_UPDATE_LIKE_BUTTONS,
          [postId]: divRef.current?.innerHTML || "",
        };
      }, 200);
    });
  };

  return (
    <div
      ref={divRef}
      className={`ncmaz-button-like-post ${
        loading ? "opacity-50" : ""
      } ${className}`}
      onClick={handleClick}
      dangerouslySetInnerHTML={{
        __html:
          NEW_UPDATE_LIKE_BUTTONS[postId] ||
          data?.post.ncPostMetaData.favoriteButtonShortcode ||
          favoriteButtonShortcode,
      }}
    />
  );
};

export default PostCardLikeAction;
