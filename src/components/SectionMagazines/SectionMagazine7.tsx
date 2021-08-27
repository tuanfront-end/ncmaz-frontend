import Card10 from "components/Card10/Card10";
import Card10V3 from "components/Card10/Card10V3";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine7Props {
  activePosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine7: FC<SectionMagazine7Props> = ({
  activePosts,
  isLoading,
}) => {
  return (
    <div className={`grid gap-6 md:gap-8`}>
      <div className={`grid gap-6 md:gap-8 lg:grid-cols-2`}>
        {activePosts[0] && (
          <Card10V3 isSkeleton={isLoading} post={activePosts[0].node} />
        )}
        {activePosts[1] && (
          <Card10V3
            isSkeleton={isLoading}
            galleryType={2}
            post={activePosts[1].node}
          />
        )}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-3">
        {activePosts
          .filter((_, i) => i > 1)
          .map((post) => (
            <Card10
              isSkeleton={isLoading}
              key={post.node.id}
              post={post.node}
            />
          ))}
      </div>
    </div>
  );
};

export default SectionMagazine7;
