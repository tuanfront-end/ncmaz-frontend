import React, { FC, useEffect } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import ncNanoId from "utils/ncNanoId";
import { CategoriesEdge2 } from "data/postCardType";
import CardCategory2 from "components/CardCategory2/CardCategory2";
import CardCategory3 from "components/CardCategory3/CardCategory3";
import CardCategory4 from "components/CardCategory4/CardCategory4";
import CardCategory5 from "components/CardCategory5/CardCategory5";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading: string;
  subHeading: string;
  categories: CategoriesEdge2[];
  categoryCardType?: "card2" | "card3" | "card4" | "card5";
  itemPerRow?: number;
}

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading,
  subHeading,
  className = "",
  itemClassName = "",
  categories,
  itemPerRow = 5,
  categoryCardType = "card3",
}) => {
  const UNIQUE_CLASS = "glide_" + ncNanoId();

  useEffect(() => {
    new Glide(`.${UNIQUE_CLASS}`, {
      perView: itemPerRow,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: itemPerRow - 1,
        },
        1024: {
          gap: 24,
          perView: itemPerRow - 2,
        },
        768: {
          gap: 20,
          perView: itemPerRow - 2,
        },
        640: {
          gap: 20,
          perView: itemPerRow - 3,
        },
        500: {
          gap: 20,
          perView: 1,
        },
      },
    }).mount();
  }, [categories]);

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

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
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
