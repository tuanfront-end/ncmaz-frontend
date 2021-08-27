import Card16Podcast from "components/Card16Podcast/Card16Podcast";
import Card17Podcast from "components/Card17Podcast/Card17Podcast";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine8Props {
  activePosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine8: FC<SectionMagazine8Props> = ({
  activePosts,
  isLoading,
}) => {
  return (
    <div className={`grid sm:grid-cols-6 gap-6 md:gap-8`}>
      {activePosts[0] && (
        <Card16Podcast
          isSkeleton={isLoading}
          className="sm:col-span-3 lg:col-span-2"
          post={activePosts[0].node}
        />
      )}
      {activePosts[1] && (
        <Card16Podcast
          isSkeleton={isLoading}
          className="sm:col-span-3 lg:col-span-2"
          post={activePosts[1].node}
        />
      )}
      <div className="flex flex-col space-y-6 md:space-y-8 sm:col-span-6 lg:col-span-2">
        {activePosts
          .filter((_, i) => i > 1 && i < 6)
          .map((p) => (
            <Card17Podcast
              isSkeleton={isLoading}
              key={p.node.id}
              post={p.node}
            />
          ))}
      </div>
    </div>
  );
};

export default SectionMagazine8;
