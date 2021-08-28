import React, { FC, useEffect } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import ncNanoId from "utils/ncNanoId";
import CardAuthorBox2 from "components/CardAuthorBox2/CardAuthorBox2";
import NextPrev from "components/NextPrev/NextPrev";
import { AuthorNode } from "data/postCardType";
import CardAuthorBox from "components/CardAuthorBox/CardAuthorBox";

export interface SectionSliderNewAuthorsProps {
  className?: string;
  heading: string;
  subHeading: string;
  authorNodes: { node: AuthorNode }[];
  itemPerView: number;
  authorCardName: "card1" | "card2";
  blockLayoutStyle: "layout-1" | "layout-2";
}

const SectionSliderNewAuthors: FC<SectionSliderNewAuthorsProps> = ({
  heading,
  subHeading,
  className = "",
  authorNodes,
  itemPerView = 5,
  authorCardName,
  blockLayoutStyle,
}) => {
  const UNIQUE_CLASS = "glide_" + ncNanoId();

  useEffect(() => {
    new Glide(`.${UNIQUE_CLASS}`, {
      perView: itemPerView,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: itemPerView - 1,
        },
        1023: {
          gap: 24,
          perView: 3,
        },
        767: {
          gap: 20,
          perView: 2,
        },
        639: {
          gap: 20,
          perView: 2,
        },
        500: {
          gap: 20,
          perView: 1,
        },
      },
    }).mount();
  }, []);

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

  return (
    <div className={`nc-SectionSliderNewAuthors ${className}`}>
      <div className={`${UNIQUE_CLASS}`}>
        <Heading
          isCenter={!isLayout2}
          desc={subHeading}
          hasNextPrev={isLayout2}
        >
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {authorNodes.map((item, index) => (
              <li
                key={index}
                className={`glide__slide ${!isLayout2 ? "pb-12 md:pb-16" : ""}`}
              >
                {renderCard(item.node)}
              </li>
            ))}
          </ul>
        </div>
        {!isLayout2 && (
          <NextPrev
            btnClassName="w-12 h-12"
            containerClassName="justify-center"
          />
        )}
      </div>
    </div>
  );
};

export default SectionSliderNewAuthors;
