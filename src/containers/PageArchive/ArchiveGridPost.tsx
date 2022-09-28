import Card11 from "components/Card11/Card11";
import Card11Skeleton from "components/Card11/Card11Skeleton";
import Card6 from "components/Card6/Card6";
import Card6Skeleton from "components/Card6/Card6Skeleton";
import { ListPosts } from "data/postCardType";
import useWindowSize from "hooks/useWindowSize";
import React, { FC } from "react";

interface Props {
  className?: string;
  posts: ListPosts["edges"];
  is_skeleton: boolean;
}

const ArchiveGridPost: FC<Props> = ({
  className = "mt-8 lg:mt-10",
  is_skeleton,
  posts = [],
}) => {
  const WINDOW_WIDTH = useWindowSize().width;
  const IS_SKELETON = is_skeleton;
  const POSTS = posts;
  return (
    <div>
      {/* LOOP ITEMS */}
      {IS_SKELETON || POSTS.length ? (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 ${className}`}
        >
          {IS_SKELETON &&
            Array.from("88888888").map((_, index) =>
              WINDOW_WIDTH >= 640 ? (
                <Card11Skeleton key={index} />
              ) : (
                <Card6Skeleton key={index} />
              )
            )}
          {POSTS.map((post) =>
            WINDOW_WIDTH >= 640 ? (
              <Card11 imageSizes="MEDIUM" key={post.node.id} post={post.node} />
            ) : (
              <Card6 key={post.node.id} post={post.node} />
            )
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ArchiveGridPost;
