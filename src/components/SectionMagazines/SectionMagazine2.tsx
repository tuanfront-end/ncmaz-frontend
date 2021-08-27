import Card11 from "components/Card11/Card11";
import Card2 from "components/Card2/Card2";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine2Props {
  activePosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine2: FC<SectionMagazine2Props> = ({
  activePosts,
  isLoading,
}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div className="grid gap-6">
        {activePosts
          .filter((_, i) => i < 3 && i > 0)
          .map((item, index) => {
            return (
              <Card11
                isSkeleton={isLoading}
                ratio="aspect-w-5 aspect-h-3"
                key={index}
                post={item.node}
              />
            );
          })}
      </div>
      <div className="lg:col-span-2">
        {activePosts[0] && (
          <Card2
            isSkeleton={isLoading}
            size="large"
            post={activePosts[0].node}
          />
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1">
        {activePosts
          .filter((_, i) => i < 5 && i >= 3)
          .map((item, index) => {
            return (
              <Card11
                isSkeleton={isLoading}
                ratio="aspect-w-5 aspect-h-3"
                key={index}
                post={item.node}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SectionMagazine2;
