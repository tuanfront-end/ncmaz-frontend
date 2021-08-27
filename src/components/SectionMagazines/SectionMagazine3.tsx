import Card2 from "components/Card2/Card2";
import Card9 from "components/Card9/Card9";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine3Props {
  activePosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine3: FC<SectionMagazine3Props> = ({
  activePosts,
  isLoading,
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
      {activePosts[0] && (
        <Card2 isSkeleton={isLoading} size="large" post={activePosts[0].node} />
      )}
      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
        {activePosts
          .filter((_, i) => i < 5 && i >= 1)
          .map((item, index) => (
            <Card9
              isSkeleton={isLoading}
              ratio="aspect-w-3 aspect-h-3"
              key={index}
              post={item.node}
            />
          ))}
      </div>
    </div>
  );
};

export default SectionMagazine3;
