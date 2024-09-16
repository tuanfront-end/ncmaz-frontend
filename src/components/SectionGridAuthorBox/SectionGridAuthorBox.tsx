import CardAuthorBox from "components/CardAuthorBox/CardAuthorBox";
import CardAuthorBoxSkeleton from "components/CardAuthorBox/CardAuthorBoxSkeleton";
import CardAuthorBox2 from "components/CardAuthorBox2/CardAuthorBox2";
import CardAuthorBox2Skeleton from "components/CardAuthorBox2/CardAuthorBox2Skeleton";
import Heading from "components/Heading/Heading";
import { AuthorNode } from "data/postCardType";
import React, { FC } from "react";

export interface SectionGridAuthorBoxProps {
  className?: string;
  heading: string;
  subHeading: string;
  authorNodes: { node: AuthorNode }[];
  authorNodesLoading?: any[];
  gridClass: string;
  authorCardName: "card1" | "card2";
  blockLayoutStyle: "layout-1" | "layout-2";
  isLoading?: boolean;
}

const SectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
  className = "",
  authorNodes,
  authorNodesLoading = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  heading,
  subHeading,
  authorCardName,
  blockLayoutStyle,
  gridClass,
  isLoading,
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

  const renderCardLoading = (_: any, index: number) => {
    switch (authorCardName) {
      case "card1":
        return <CardAuthorBoxSkeleton key={index} />;
      case "card2":
        return <CardAuthorBox2Skeleton key={index} />;

      default:
        return <CardAuthorBox2Skeleton key={index} />;
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
      <div className={`grid gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 ${gridClass}`}>
        {isLoading
          ? authorNodesLoading.map(renderCardLoading)
          : authorNodes.map(renderCard)}
      </div>
    </div>
  );
};

export default SectionGridAuthorBox;
