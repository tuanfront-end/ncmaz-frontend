import React from "react";
import { FC, useRef, useEffect } from "react";

export interface PostCardLikeActionProps {
  favoriteButtonShortcode: string;
  className?: string;
  onClick?: () => void;
  postId: number;
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
  useEffect(() => {
    return () => {
      _timeOut && clearTimeout(_timeOut);
    };
  }, []);

  const handleClick = () => {
    if (!divRef.current || !jQuery) {
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
      className={`ncmaz-button-like-post ${className}`}
      onClick={handleClick}
      dangerouslySetInnerHTML={{
        __html: NEW_UPDATE_LIKE_BUTTONS[postId] || favoriteButtonShortcode,
      }}
    />
  );
};

export default PostCardLikeAction;
