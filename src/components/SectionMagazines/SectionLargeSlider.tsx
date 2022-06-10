import CardLarge1 from "components/CardLarge1/CardLarge1";
import CardLarge1Skeleton from "components/CardLarge1/CardLarge1Skeleton";
import { ListPosts } from "data/postCardType";
import React, { FC, useState } from "react";

export interface SectionLargeSliderProps {
  listPosts: ListPosts["edges"];
  isLoading?: boolean;
}

const SectionLargeSlider: FC<SectionLargeSliderProps> = ({
  listPosts,
  isLoading,
}) => {
  const [indexActive, setIndexActive] = useState(0);

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= listPosts.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return listPosts.length - 1;
      }
      return state - 1;
    });
  };

  return (
    <div>
      {isLoading ? (
        <CardLarge1Skeleton />
      ) : (
        listPosts.map((item, index) => {
          if (indexActive !== index) {
            return null;
          }
          return (
            <CardLarge1
              key={index}
              onClickNext={
                document.querySelector("html")?.getAttribute("dir") === "rtl"
                  ? handleClickPrev
                  : handleClickNext
              }
              onClickPrev={
                document.querySelector("html")?.getAttribute("dir") === "rtl"
                  ? handleClickNext
                  : handleClickPrev
              }
              post={item.node}
              hasNext={
                document.querySelector("html")?.getAttribute("dir") === "rtl"
                  ? index > 0
                  : listPosts.length > index + 1
              }
              hasPrev={
                document.querySelector("html")?.getAttribute("dir") === "rtl"
                  ? listPosts.length > index + 1
                  : index > 0
              }
            />
          );
        })
      )}
    </div>
  );
};

export default SectionLargeSlider;
