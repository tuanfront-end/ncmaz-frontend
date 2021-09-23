import Card2 from "components/Card2/Card2";
import Card2Skeleton from "components/Card2/Card2Skeleton";
import Card6 from "components/Card6/Card6";
import Card6Skeleton from "components/Card6/Card6Skeleton";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine1Props {
  listPosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine1: FC<SectionMagazine1Props> = ({
  listPosts,
  isLoading,
}) => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {isLoading ? (
          <Card2Skeleton />
        ) : listPosts[0] ? (
          <Card2 size="large" post={listPosts[0]?.node} />
        ) : null}
        <div className="grid gap-6 md:gap-8">
          {isLoading
            ? [1, 1, 1].map((_, index) => <Card6Skeleton key={index} />)
            : listPosts
                .filter((_, i) => i > 0 && i < 4)
                .map((item, index) => <Card6 key={index} post={item.node} />)}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine1;
