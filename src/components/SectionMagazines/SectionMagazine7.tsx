import Card10 from "components/Card10/Card10";
import Card10Skeleton from "components/Card10/Card10Skeleton";
import Card10V3 from "components/Card10/Card10V3";
import Card10V3Skeleton from "components/Card10/Card10V3Skeleton";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine7Props {
  listPosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine7: FC<SectionMagazine7Props> = ({
  listPosts,
  isLoading,
}) => {
  return (
    <div className="SectionMagazine7 grid grid-cols-1 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8">
      <div className="grid gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 grid-cols-1 lg:grid-cols-2">
        {isLoading ? (
          <Card10V3Skeleton />
        ) : listPosts[0] ? (
          <Card10V3 post={listPosts[0].node} />
        ) : null}
        {isLoading ? (
          <Card10V3Skeleton />
        ) : listPosts[1] ? (
          <Card10V3 galleryType={2} post={listPosts[1].node} />
        ) : null}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 mt-3">
        {isLoading
          ? [1, 1, 1, 1].map((_, i) => <Card10Skeleton key={i} />)
          : listPosts
              .filter((_, i) => i > 1)
              .map((post) => <Card10 key={post.node.id} post={post.node} />)}
      </div>
    </div>
  );
};

export default SectionMagazine7;
