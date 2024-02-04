import Card16Podcast from "components/Card16Podcast/Card16Podcast";
import Card16PodcastSkeleton from "components/Card16Podcast/Card16PodcastSkeleton";
import Card17Podcast from "components/Card17Podcast/Card17Podcast";
import Card17PodcastSkeleton from "components/Card17Podcast/Card17PodcastSkeleton";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine8Props {
  listPosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine8: FC<SectionMagazine8Props> = ({
  listPosts,
  isLoading,
}) => {
  return (
    <div
      className={`SectionMagazine8 grid grid-cols-1 sm:grid-cols-6 gap-5 sm:gap-6 2xl:gap-8`}
    >
      {isLoading ? (
        <Card16PodcastSkeleton className="sm:col-span-3 lg:col-span-2" />
      ) : listPosts[0] ? (
        <Card16Podcast
          className="sm:col-span-3 lg:col-span-2"
          post={listPosts[0].node}
        />
      ) : null}

      {isLoading ? (
        <Card16PodcastSkeleton className="sm:col-span-3 lg:col-span-2" />
      ) : listPosts[1] ? (
        <Card16Podcast
          className="sm:col-span-3 lg:col-span-2"
          post={listPosts[1].node}
        />
      ) : null}
      <div className="flex flex-col space-y-5 sm:space-y-6 md:space-y-8 sm:col-span-6 lg:col-span-2">
        {isLoading
          ? [1, 1, 1, 1].map((_, i) => <Card17PodcastSkeleton key={i} />)
          : listPosts
              .filter((_, i) => i > 1 && i < 6)
              .map((p) => <Card17Podcast key={p.node.id} post={p.node} />)}
      </div>
    </div>
  );
};

export default SectionMagazine8;
