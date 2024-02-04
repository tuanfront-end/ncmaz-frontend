import React, { FC, useEffect, useRef } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import { CategoriesEdge2 } from "data/postCardType";
import CardCategory2 from "components/CardCategory2/CardCategory2";
import CardCategory3 from "components/CardCategory3/CardCategory3";
import CardCategory4 from "components/CardCategory4/CardCategory4";
import CardCategory5 from "components/CardCategory5/CardCategory5";
import CardCategory2Skeleton from "components/CardCategory2/CardCategory2Skeleton";
import CardCategory3Skeleton from "components/CardCategory3/CardCategory3Skeleton";
import CardCategory4Skeleton from "components/CardCategory4/CardCategory4Skeleton";
import CardCategory5Skeleton from "components/CardCategory5/CardCategory5Skeleton";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading: string;
  subHeading: string;
  categories: CategoriesEdge2[];
  categoriesLoading?: any[];
  categoryCardType?: "card2" | "card3" | "card4" | "card5";
  isLoading?: boolean;
  //
  itemPerView: number;
  sliderAnimationDuration: number;
  sliderAutoplayTime: number;
  sliderHoverpause: boolean;
  sliderRewind: boolean;
  sliderStartAt: number;
}

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading,
  subHeading,
  className = "",
  itemClassName = "",
  categories,
  categoryCardType = "card3",
  isLoading,
  categoriesLoading = [1, 1, 1, 1, 1, 1, 1, 1, 1],
  itemPerView = 5,
  sliderAnimationDuration,
  sliderAutoplayTime,
  sliderHoverpause,
  sliderRewind,
  sliderStartAt,
}) => {
  const sliderRef = useRef(null);

  const sliderConfiguration: Partial<Glide.Options> = {
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
      1024: {
        perView: itemPerView - 2,
        gap: 24,
      },
      768: {
        gap: 20,
        perView: itemPerView - 2,
      },
      640: {
        perView: itemPerView - 3,
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
      return () => {};
    }

    const slider = new Glide(sliderRef.current, sliderConfiguration);
    slider.mount();
    return () => {
      slider.destroy();
    };
  }, [
    categories,
    sliderRef,
    itemPerView,
    sliderAnimationDuration,
    sliderAutoplayTime,
    sliderHoverpause,
    sliderRewind,
    sliderStartAt,
  ]);

  const renderCard = (item: CategoriesEdge2, index: number) => {
    const topIndex = index < 3 ? `#${index + 1}` : undefined;
    switch (categoryCardType) {
      case "card2":
        return (
          <CardCategory2
            className="hover:!shadow-none"
            index={topIndex}
            taxonomy={item.node}
          />
        );
      case "card3":
        return <CardCategory3 taxonomy={item.node} />;
      case "card4":
        return <CardCategory4 index={topIndex} taxonomy={item.node} />;
      case "card5":
        return <CardCategory5 taxonomy={item.node} />;

      default:
        return (
          <CardCategory2
            className="hover:!shadow-none"
            index={topIndex}
            taxonomy={item.node}
          />
        );
    }
  };

  const renderCardLoading = () => {
    switch (categoryCardType) {
      case "card2":
        return <CardCategory2Skeleton className="hover:!shadow-none" />;
      case "card3":
        return <CardCategory3Skeleton />;
      case "card4":
        return <CardCategory4Skeleton />;
      case "card5":
        return <CardCategory5Skeleton />;

      default:
        return <CardCategory2Skeleton className="hover:!shadow-none" />;
    }
  };

  return (
    <div className={`nc-SectionSliderNewCategories relative ${className}`}>
      <div className={`flow-root`} ref={sliderRef}>
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {isLoading
              ? categoriesLoading.map((_, index) => (
                  <li key={index} className={`glide__slide ${itemClassName}`}>
                    {renderCardLoading()}
                  </li>
                ))
              : categories.map((item, index) => (
                  <li
                    key={index}
                    className={`glide__slide !h-auto ${itemClassName}`}
                  >
                    {renderCard(item, index)}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderNewCategories;
