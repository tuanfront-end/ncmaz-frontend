import Card8 from "components/Card8/Card8";
import Card9 from "components/Card9/Card9";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine4Props {
  activePosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine4: FC<SectionMagazine4Props> = ({
  activePosts,
  isLoading,
}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {activePosts[0] && (
        <Card8
          isSkeleton={isLoading}
          className="sm:col-span-2"
          post={activePosts[0].node}
        />
      )}
      {activePosts
        .filter((_, i) => i < 3 && i >= 1)
        .map((item, index) => (
          <Card9 isSkeleton={isLoading} key={index} post={item.node} />
        ))}
      {activePosts
        .filter((_, i) => i < 5 && i >= 3)
        .map((item, index) => (
          <Card9 isSkeleton={isLoading} key={index} post={item.node} />
        ))}
      {activePosts[5] && (
        <Card8
          isSkeleton={isLoading}
          className="sm:col-span-2"
          post={activePosts[5].node}
        />
      )}
    </div>
  );
};

export default SectionMagazine4;
