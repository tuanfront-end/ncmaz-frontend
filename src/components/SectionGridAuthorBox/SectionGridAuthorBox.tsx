import CardAuthorBox from "components/CardAuthorBox/CardAuthorBox";
import CardAuthorBox2 from "components/CardAuthorBox2/CardAuthorBox2";
import Heading from "components/Heading/Heading";
import { AuthorNode } from "data/postCardType";
import React, { FC } from "react";

export interface SectionGridAuthorBoxProps {
  className?: string;
  heading: string;
  subHeading: string;
  authorNodes: { node: AuthorNode }[];
  gridClass: string;
  authorCardName: "card1" | "card2";
  blockLayoutStyle: "layout-1" | "layout-2";
}

const SectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
  className = "",
  authorNodes,
  heading,
  subHeading,
  authorCardName,
  blockLayoutStyle,
  gridClass,
}) => {
  const renderCard = (author: { node: AuthorNode }, index: number) => {
    switch (authorCardName) {
      case "card1":
        return <CardAuthorBox key={index} author={author.node} />;
      case "card2":
        return <CardAuthorBox2 key={index} author={author.node} />;

      default:
        return <CardAuthorBox key={index} author={author.node} />;
    }
  };

  return (
    <div
      className={`nc-SectionGridAuthorBox relative ${className}`}
      data-nc-id="SectionGridAuthorBox"
    >
      <Heading desc={subHeading} isCenter={blockLayoutStyle === "layout-1"}>
        {heading}
      </Heading>
      <div className={`grid gap-6 md:gap-8 ${gridClass}`}>
        {authorNodes.map(renderCard)}
      </div>
    </div>
  );
};

export default SectionGridAuthorBox;
