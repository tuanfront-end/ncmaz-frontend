import Card2 from "components/Card2/Card2";
import Card6 from "components/Card6/Card6";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine1Props {
  activePosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine1: FC<SectionMagazine1Props> = ({
  activePosts,
  isLoading,
}) => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {activePosts[0] && (
          <Card2
            isSkeleton={isLoading}
            size="large"
            post={activePosts[0].node}
          />
        )}
        <div className="grid gap-6 md:gap-8">
          {activePosts
            .filter((_, i) => i < 4 && i > 0)
            .map((item, index) => (
              <Card6 isSkeleton={isLoading} key={index} post={item.node} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine1;
