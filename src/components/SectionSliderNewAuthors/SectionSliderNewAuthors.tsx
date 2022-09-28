import React, { FC, useEffect, useRef } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import CardAuthorBox2 from "components/CardAuthorBox2/CardAuthorBox2";
import NextPrev from "components/NextPrev/NextPrev";
import { AuthorNode } from "data/postCardType";
import CardAuthorBox from "components/CardAuthorBox/CardAuthorBox";
import CardAuthorBoxSkeleton from "components/CardAuthorBox/CardAuthorBoxSkeleton";
import CardAuthorBox2Skeleton from "components/CardAuthorBox2/CardAuthorBox2Skeleton";

export interface SectionSliderNewAuthorsProps {
  className?: string;
  heading: string;
  subHeading: string;
  authorNodes: { node: AuthorNode }[];
  authorNodesLoading?: any[];
  authorCardName: "card1" | "card2";
  blockLayoutStyle: "layout-1" | "layout-2";
  isLoading?: boolean;
  uniqueClass?: string;
  //
  itemPerView: number;
  sliderAnimationDuration: number;
  sliderAutoplayTime: number;
  sliderHoverpause: boolean;
  sliderRewind: boolean;
  sliderStartAt: number;
}

const SectionSliderNewAuthors: FC<SectionSliderNewAuthorsProps> = ({
  heading,
  subHeading,
  className = "",
  authorNodes,
  authorCardName,
  blockLayoutStyle,
  isLoading,
  authorNodesLoading = [1, 1, 1, 1, 1, 1, 1, 1, 1],
  itemPerView = 5,
  sliderAnimationDuration,
  sliderAutoplayTime,
  sliderHoverpause,
  sliderRewind,
  sliderStartAt,
}) => {
  const sliderRef = useRef(null);

  const sliderConfiguration: Glide.Options = {
    // @ts-ignore
    direction:
      document.querySelector("html")?.getAttribute("dir") === "rtl"
        ? "rtl"
        : "ltr",
    //
    gap: 32,
    bound: true,
    // data from gutenberg slider settings
    perView: itemPerView,
    startAt: isLoading ? 0 : sliderStartAt,
    hoverpause: sliderHoverpause,
    animationDuration: sliderAnimationDuration || undefined,
    rewind: sliderRewind || true,
    autoplay: isLoading ? false : sliderAutoplayTime || false,
    // end data from gutenberg slider settings
    breakpoints: {
      1440: {
        gap: 24,
      },
      1280: {
        perView: itemPerView - 1,
        gap: 24,
      },
      1023: {
        perView: 3,
        gap: 24,
      },
      767: {
        gap: 20,
        perView: 2,
      },
      639: {
        perView: 2,
        gap: 20,
      },
      500: {
        perView: 1.3,
        gap: 20,
      },
    },
  };

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    const slider = new Glide(sliderRef.current, sliderConfiguration);
    slider.mount();
    // @ts-ignore
    return () => slider.destroy();
  }, [
    authorNodes,
    sliderRef,
    itemPerView,
    sliderAnimationDuration,
    sliderAutoplayTime,
    sliderHoverpause,
    sliderRewind,
    sliderStartAt,
  ]);

  const isLayout2 = blockLayoutStyle === "layout-2";

  const renderCard = (node: AuthorNode) => {
    switch (authorCardName) {
      case "card1":
        return (
          <CardAuthorBox
            className={!isLayout2 ? "" : "hover:!shadow-none"}
            author={node}
          />
        );

      case "card2":
        return (
          <CardAuthorBox2
            className={!isLayout2 ? "" : "hover:!shadow-none"}
            author={node}
          />
        );

      default:
        return (
          <CardAuthorBox2
            className={!isLayout2 ? "" : "hover:!shadow-none"}
            author={node}
          />
        );
    }
  };

  const renderCardSkeleton = () => {
    switch (authorCardName) {
      case "card1":
        return (
          <CardAuthorBoxSkeleton
            className={!isLayout2 ? "" : "hover:!shadow-none"}
          />
        );

      case "card2":
        return (
          <CardAuthorBox2Skeleton
            className={!isLayout2 ? "" : "hover:!shadow-none"}
          />
        );

      default:
        return (
          <CardAuthorBox2Skeleton
            className={!isLayout2 ? "" : "hover:!shadow-none"}
          />
        );
    }
  };

  return (
    <div className={`nc-SectionSliderNewAuthors ${className}`}>
      <div ref={sliderRef}>
        <Heading
          isCenter={!isLayout2}
          desc={subHeading}
          hasNextPrev={isLayout2}
        >
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {isLoading
              ? authorNodesLoading.map((_, index) => (
                  <li
                    key={index}
                    className={`glide__slide ${
                      !isLayout2 ? "sm:pb-10 md:pb-12" : ""
                    }`}
                  >
                    {renderCardSkeleton()}
                  </li>
                ))
              : authorNodes.map((item, index) => (
                  <li
                    key={index}
                    className={`glide__slide !h-auto ${
                      !isLayout2 ? "sm:pb-10 md:pb-12" : ""
                    }`}
                  >
                    {renderCard(item.node)}
                  </li>
                ))}
          </ul>
        </div>
        {!isLayout2 && (
          <NextPrev
            btnClassName="w-12 h-12"
            containerClassName="hidden sm:flex justify-center"
          />
        )}
      </div>
    </div>
  );
};

export default SectionSliderNewAuthors;
