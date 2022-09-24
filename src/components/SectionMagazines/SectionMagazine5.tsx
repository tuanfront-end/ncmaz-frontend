import Card12 from "components/Card12/Card12";
import Card12Skeleton from "components/Card12/Card12Skeleton";
import Card13 from "components/Card13/Card13";
import Card13Skeleton from "components/Card13/Card13Skeleton";
import { ListPosts } from "data/postCardType";
import React, { FC } from "react";

export interface SectionMagazine5Props {
  listPosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionMagazine5: FC<SectionMagazine5Props> = ({
  listPosts,
  isLoading,
}) => {
  return (
    <div className="SectionMagazine5 ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
        {isLoading ? (
          <Card12Skeleton />
        ) : listPosts[0] ? (
          <Card12 post={listPosts[0].node} />
        ) : null}
        <div className="flex flex-col space-y-5 md:space-y-7">
          {isLoading
            ? [1, 2, 3].map((_, index) => <Card13Skeleton key={index} />)
            : listPosts
                .filter((_, i) => i < 4 && i > 0)
                .map((item, index) => (
                  <div className="w-full" key={index}>
                    <Card13 key={index} post={item.node} />
                  </div>
                ))}
        </div>
      </div>
      {!isLoading && listPosts[4] && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 mt-5 md:mt-7">
          {listPosts
            .filter((_, i) => i >= 4)
            .map((item, index) => (
              <Card13 key={index} post={item.node} />
            ))}
        </div>
      )}
    </div>
  );
};

export default SectionMagazine5;
