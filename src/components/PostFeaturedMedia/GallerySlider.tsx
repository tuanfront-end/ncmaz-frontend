import NcImage from "components/NcImage/NcImage";
import NextPrev from "components/NextPrev/NextPrev";
import NCMAZ_TRANSLATE from "contains/translate";
import { FullImageNode } from "data/types";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import debounce from "utils/debounce";

export interface GallerySliderProps {
  galleryImgs: FullImageNode[];
  postLink: string;
}

const GallerySlider: FC<GallerySliderProps> = ({ galleryImgs, postLink }) => {
  const galleryScrollerRef = useRef<HTMLDivElement>(null);
  const btnNextRef = useRef<HTMLDivElement>(null);
  const btnPrevRef = useRef<HTMLDivElement>(null);

  const [scrollEndedRight, setScrollEndedRight] = useState(
    document.querySelector("html")?.getAttribute("dir") === "rtl"
  );
  const [scrollEndedLeft, setScrollEndedLeft] = useState(
    document.querySelector("html")?.getAttribute("dir") !== "rtl"
  );
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    ncHorizontalSnapScrollCallBack();
  }, []);

  const ncHorizontalSnapScrollCallBack = useCallback(ncHorizontalSnapScroll, [
    galleryImgs,
  ]);

  function ncHorizontalSnapScroll() {
    const gallery_scroller = galleryScrollerRef.current;
    if (!gallery_scroller) {
      return;
    }

    const galleryItemSize =
      gallery_scroller.querySelector("div")?.clientWidth || 0;
    const scrollToNextPage = () => {
      gallery_scroller.scrollTo(
        gallery_scroller.scrollLeft + galleryItemSize,
        0
      );
    };
    const scrollToPrevPage = () => {
      gallery_scroller.scrollTo(
        gallery_scroller.scrollLeft - galleryItemSize,
        0
      );
    };

    btnNextRef.current?.addEventListener("click", scrollToNextPage);
    btnPrevRef.current?.addEventListener("click", scrollToPrevPage);

    gallery_scroller.addEventListener("scroll", function () {
      handleScrollPostion();
    });

    const handleScrollPostion = debounce(function () {
      setScrollEndedLeft(false);
      setScrollEndedRight(false);
      // IF RTL
      if (document.querySelector("html")?.getAttribute("dir") === "rtl") {
        setScrollIndex(
          Math.floor(-gallery_scroller.scrollLeft / galleryItemSize)
        );
        if (
          gallery_scroller.clientWidth - gallery_scroller.scrollLeft >=
          gallery_scroller.scrollWidth
        ) {
          setScrollEndedLeft(true);
        } else if (gallery_scroller.scrollLeft === 0) {
          setScrollEndedRight(true);
        }
      } else {
        setScrollIndex(
          Math.floor(gallery_scroller.scrollLeft / galleryItemSize)
        );
        if (
          gallery_scroller.clientWidth + gallery_scroller.scrollLeft >=
          gallery_scroller.scrollWidth
        ) {
          setScrollEndedRight(true);
        } else if (gallery_scroller.scrollLeft === 0) {
          setScrollEndedLeft(true);
        }
      }
    }, 400);
  }

  return (
    <div
      className={`nc-gallerySlider group relative z-10 xl:z-auto w-full h-full`}
    >
      <div
        className=" h-full gallery_scroller hiddenScrollbar scrollBehaviorSmooth"
        ref={galleryScrollerRef}
      >
        {galleryImgs.map((item, index) => (
          <a
            href={postLink}
            className="block h-full w-full flex-shrink-0 "
            key={index}
          >
            <NcImage
              src={item.sourceUrl}
              srcSet={item.srcSet}
              alt={item.altText}
              containerClassName="w-full h-full"
            />
          </a>
        ))}
      </div>
      {/*  */}
      <div className="">
        <div
          ref={btnPrevRef}
          className="nc-gallerySlider__prevBtn absolute opacity-0 group-hover:opacity-100 z-20 left-2 top-1/2 -translate-y-1/2 "
          title={NCMAZ_TRANSLATE["prev"]}
        >
          {!scrollEndedLeft && (
            <NextPrev isOfGlide={false} onlyPrev btnClassName="w-8 h-8" />
          )}
        </div>
        <div
          ref={btnNextRef}
          className="nc-gallerySlider__nextBtn absolute opacity-0 group-hover:opacity-100 z-20 right-2 top-1/2 -translate-y-1/2 "
          title={NCMAZ_TRANSLATE["next"]}
        >
          {!scrollEndedRight && (
            <NextPrev isOfGlide={false} onlyNext btnClassName="w-8 h-8" />
          )}
        </div>
      </div>
      {/*  */}
      <div className="absolute w-full left-0 bottom-0 h-6 bg-gradient-to-t from-neutral-800/50"></div>
      <div className="absolute z-10 bottom-3 left-0 w-full flex items-center justify-center glide__bullets">
        {galleryImgs.map((_, index) => (
          <div
            key={index}
            className={`glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 ${
              index === scrollIndex ? "glide__bullet--active" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
