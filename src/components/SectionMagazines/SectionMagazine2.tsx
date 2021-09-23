import Card11 from "components/Card11/Card11";
import Card11Skeleton from "components/Card11/Card11Skeleton";
import Card2 from "components/Card2/Card2";
import Card2Skeleton from "components/Card2/Card2Skeleton";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine2Props {
  listPosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine2: FC<SectionMagazine2Props> = ({
  listPosts,
  isLoading,
}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div className="grid gap-6">
        {isLoading
          ? [1, 1].map((_, index) => (
              <Card11Skeleton ratio="aspect-w-5 aspect-h-3" key={index} />
            ))
          : listPosts
              .filter((_, i) => i < 3 && i > 0)
              .map((item, index) => {
                return (
                  <Card11
                    ratio="aspect-w-5 aspect-h-3"
                    key={index}
                    post={item.node}
                  />
                );
              })}
      </div>
      <div className="lg:col-span-2">
        {isLoading ? (
          <Card2Skeleton />
        ) : listPosts[0] ? (
          <Card2 size="large" post={listPosts[0].node} />
        ) : null}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1">
        {isLoading
          ? [1, 1].map((_, index) => (
              <Card11Skeleton ratio="aspect-w-5 aspect-h-3" key={index} />
            ))
          : listPosts
              .filter((_, i) => i < 5 && i >= 3)
              .map((item, index) => {
                return (
                  <Card11
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
