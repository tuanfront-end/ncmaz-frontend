import Card2 from "components/Card2/Card2";
import Card2Skeleton from "components/Card2/Card2Skeleton";
import Card9 from "components/Card9/Card9";
import Card9Skeleton from "components/Card9/Card9Skeleton";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine3Props {
  listPosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine3: FC<SectionMagazine3Props> = ({
  listPosts,
  isLoading,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8">
      {isLoading ? (
        <Card2Skeleton />
      ) : listPosts[0] ? (
        <Card2 size="large" post={listPosts[0].node} />
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-8">
        {isLoading
          ? [1, 1, 1, 1].map((_, index) => (
              <Card9Skeleton
                ratio="aspect-w-5 aspect-h-4 sm:aspect-w-3 sm:aspect-h-3"
                key={index}
              />
            ))
          : listPosts
              .filter((_, i) => i < 5 && i >= 1)
              .map((item, index) => (
                <Card9
                  ratio="aspect-w-5 aspect-h-4 sm:aspect-w-3 sm:aspect-h-3"
                  key={index}
                  post={item.node}
                />
              ))}
      </div>
    </div>
  );
};

export default SectionMagazine3;
