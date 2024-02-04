import Card15Podcast from "components/Card15Podcast/Card15Podcast";
import Card15PodcastSkeleton from "components/Card15Podcast/Card15PodcastSkeleton";
import Card9 from "components/Card9/Card9";
import Card9Skeleton from "components/Card9/Card9Skeleton";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine9Props {
  listPosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine9: FC<SectionMagazine9Props> = ({
  listPosts,
  isLoading,
}) => {
  return (
    <div className="SectionMagazine9">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 2xl:gap-8`}
      >
        {isLoading ? (
          <Card9Skeleton ratio="aspect-w-4 aspect-h-3" />
        ) : listPosts[0] ? (
          <Card9 ratio="aspect-w-4 aspect-h-3" post={listPosts[0].node} />
        ) : null}
        {isLoading ? (
          <Card9Skeleton ratio="aspect-w-4 aspect-h-3" />
        ) : listPosts[1] ? (
          <Card9 ratio="aspect-w-4 aspect-h-3" post={listPosts[1].node} />
        ) : null}
        {isLoading ? (
          <Card9Skeleton ratio="aspect-w-4 aspect-h-3" />
        ) : listPosts[2] ? (
          <Card9 ratio="aspect-w-4 aspect-h-3" post={listPosts[2].node} />
        ) : null}
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 2xl:gap-8 mt-8`}
      >
        {isLoading
          ? [1, 1, 1, 1, 1, 1].map((_, i) => <Card15PodcastSkeleton key={i} />)
          : listPosts
              .filter((_, i) => i > 2)
              .map((p) => <Card15Podcast key={p.node.id} post={p.node} />)}
      </div>
    </div>
  );
};

export default SectionMagazine9;
