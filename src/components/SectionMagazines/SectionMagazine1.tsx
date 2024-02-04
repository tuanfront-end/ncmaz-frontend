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
    <div className="SectionMagazine1">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-7">
        {isLoading ? (
          <Card2Skeleton />
        ) : listPosts[0] ? (
          <Card2 size="large" post={listPosts[0]?.node} />
        ) : null}
        <div className="flex flex-col space-y-5 md:space-y-7">
          {isLoading
            ? [1, 1, 1].map((_, index) => <Card6Skeleton key={index} />)
            : listPosts
                .filter((_, i) => i > 0 && i < 4)
                .map((item, index) => <Card6 key={index} post={item.node} />)}
        </div>
      </div>
      {!isLoading && listPosts[4] && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 mt-5 md:mt-7">
          {listPosts
            .filter((_, i) => i >= 4)
            .map((item, index) => (
              <Card6 key={index} post={item.node} />
            ))}
        </div>
      )}
    </div>
  );
};

export default SectionMagazine1;
