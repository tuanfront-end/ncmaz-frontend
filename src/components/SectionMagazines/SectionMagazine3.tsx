import Card2 from "components/Card2/Card2";
import Card2Skeleton from "components/Card2/Card2Skeleton";
import Card6 from "components/Card6/Card6";
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
    <div className="SectionMagazine3 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
        {isLoading ? (
          <Card2Skeleton />
        ) : listPosts[0] ? (
          <Card2 size="large" post={listPosts[0].node} />
        ) : null}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
          {isLoading
            ? [1, 1, 1, 1].map((_, index) => (
                <Card9Skeleton
                  ratio="aspect-w-5 aspect-h-4 sm:aspect-w-14 sm:aspect-h-15"
                  key={index}
                />
              ))
            : listPosts
                .filter((_, i) => i < 5 && i >= 1)
                .map((item, index) => (
                  <Card9
                    ratio="aspect-w-5 aspect-h-4 sm:aspect-w-14 sm:aspect-h-15"
                    titleClassName="block text-base font-semibold text-white "
                    key={index}
                    post={item.node}
                  />
                ))}
        </div>
      </div>
      {!isLoading && listPosts[5] && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 mt-5 md:mt-7 ">
          {listPosts
            .filter((_, i) => i >= 5)
            .map((item, index) => (
              <Card6 key={index} post={item.node} />
            ))}
        </div>
      )}
    </div>
  );
};

export default SectionMagazine3;
