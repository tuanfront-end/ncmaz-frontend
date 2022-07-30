import React, { FC, useRef, useState } from "react";
import CardLarge1 from "components/CardLarge1/CardLarge1";
import CardLarge1Skeleton from "components/CardLarge1/CardLarge1Skeleton";
import { ListPosts } from "data/postCardType";
import { useInterval, useBoolean } from "react-use";

export interface SectionLargeSliderProps {
  listPosts: ListPosts["edges"];
  isLoading?: boolean;
}

let TIME_OUT: NodeJS.Timeout | null = null;

const SectionLargeSlider: FC<SectionLargeSliderProps> = ({
  listPosts,
  isLoading,
}) => {
  const autoPlayRef = useRef<HTMLInputElement>(null);
  //
  const [indexActive, setIndexActive] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      console.log("useInterval", autoPlayRef.current);

      handleAutoNext();
    },
    isRunning ? 3000 : null
  );
  //

  const handleAutoNext = () => {
    setIndexActive((state) => {
      if (state >= listPosts.length - 1) {
        return 0;
      }
      return state + 1;
    });
    setIsClicked(true);
  };

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= listPosts.length - 1) {
        return 0;
      }
      return state + 1;
    });
    handleAfterClick();
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return listPosts.length - 1;
      }
      return state - 1;
    });
    handleAfterClick();
  };

  const handleAfterClick = () => {
    setIsClicked(true);
    toggleIsRunning(false);
    if (TIME_OUT) {
      clearTimeout(TIME_OUT);
    }
    TIME_OUT = setTimeout(() => {
      toggleIsRunning(true);
    }, 2000);
  };

  return (
    <div className="ncSectionLargeSlider">
      <div
        className="invisible"
        ref={autoPlayRef}
        data-section-largeslider-auto-play={true}
      ></div>
      <div className="invisible" data-section-largeslider-duration={3000}></div>
      {isLoading ? (
        <CardLarge1Skeleton />
      ) : (
        listPosts.map((item, index) => {
          if (indexActive !== index) {
            return null;
          }
          return (
            <CardLarge1
              postsLength={[...Array(listPosts.length).keys()]}
              indexActive={indexActive}
              hasAnimation={isClicked}
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
