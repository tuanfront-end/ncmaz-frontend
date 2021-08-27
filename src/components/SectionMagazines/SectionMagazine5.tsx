import Card12 from "components/Card12/Card12";
import Card13 from "components/Card13/Card13";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine5Props {
  activePosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine5: FC<SectionMagazine5Props> = ({
  activePosts,
  isLoading,
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 md:gap-7">
      {activePosts[0] && (
        <Card12 isSkeleton={isLoading} post={activePosts[0].node} />
      )}
      <div className="grid gap-5 md:gap-7">
        {activePosts
          .filter((_, i) => i < 4 && i > 0)
          .map((item, index) => (
            <Card13 isSkeleton={isLoading} key={index} post={item.node} />
          ))}
      </div>
    </div>
  );
};

export default SectionMagazine5;
