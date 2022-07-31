import Card8 from "components/Card8/Card8";
import Card8Skeleton from "components/Card8/Card8Skeleton";
import Card9 from "components/Card9/Card9";
import Card9Skeleton from "components/Card9/Card9Skeleton";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine4Props {
  listPosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine4: FC<SectionMagazine4Props> = ({
  listPosts,
  isLoading,
}) => {
  return (
    <div className="SectionMagazine4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8">
      {isLoading ? (
        <Card8Skeleton className="sm:col-span-2" />
      ) : listPosts[0] ? (
        <Card8 className="sm:col-span-2" post={listPosts[0].node} />
      ) : null}
      {isLoading
        ? [1, 1].map((_, index) => <Card9Skeleton key={index} />)
        : listPosts
            .filter((_, i) => i < 3 && i >= 1)
            .map((item, index) => <Card9 key={index} post={item.node} />)}
      {isLoading
        ? [1, 1].map((_, index) => <Card9Skeleton key={index} />)
        : listPosts
            .filter((_, i) => i < 5 && i >= 3)
            .map((item, index) => <Card9 key={index} post={item.node} />)}
      {isLoading ? (
        <Card8Skeleton className="sm:col-span-2" />
      ) : listPosts[5] ? (
        <Card8 className="sm:col-span-2" post={listPosts[5].node} />
      ) : null}
    </div>
  );
};

export default SectionMagazine4;
