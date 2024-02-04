import Card1 from "components/Card1/Card1";
import Card1Skeleton from "components/Card1/Card1Skeleton";
import Card10 from "components/Card10/Card10";
import Card10Skeleton from "components/Card10/Card10Skeleton";
import Card11 from "components/Card11/Card11";
import Card11Skeleton from "components/Card11/Card11Skeleton";
import Card12 from "components/Card12/Card12";
import Card12Skeleton from "components/Card12/Card12Skeleton";
import Card13 from "components/Card13/Card13";
import Card13Skeleton from "components/Card13/Card13Skeleton";
import Card14 from "components/Card14/Card14";
import Card14Skeleton from "components/Card14/Card14Skeleton";
import Card16Podcast from "components/Card16Podcast/Card16Podcast";
import Card16PodcastSkeleton from "components/Card16Podcast/Card16PodcastSkeleton";
import Card17Podcast from "components/Card17Podcast/Card17Podcast";
import Card17PodcastSkeleton from "components/Card17Podcast/Card17PodcastSkeleton";
import Card19 from "components/Card19/Card19";
import Card19Skeleton from "components/Card19/Card19Skeleton";
import Card2 from "components/Card2/Card2";
import Card2Skeleton from "components/Card2/Card2Skeleton";
import Card3 from "components/Card3/Card3";
import Card3Skeleton from "components/Card3/Card3Skeleton";
import Card4 from "components/Card4/Card4";
import Card4Skeleton from "components/Card4/Card4Skeleton";
import Card5 from "components/Card5/Card5";
import Card5Skeleton from "components/Card5/Card5Skeleton";
import Card6 from "components/Card6/Card6";
import Card6Skeleton from "components/Card6/Card6Skeleton";
import Card7 from "components/Card7/Card7";
import Card7Skeleton from "components/Card7/Card7Skeleton";
import Card8 from "components/Card8/Card8";
import Card8Skeleton from "components/Card8/Card8Skeleton";
import Card9 from "components/Card9/Card9";
import Card9Skeleton from "components/Card9/Card9Skeleton";
import { ListPosts } from "data/postCardType";
import useWindowSize from "hooks/useWindowSize";
import React, { FC } from "react";

interface Props {
  className?: string;
  posts: ListPosts["edges"];
  is_skeleton: boolean;
  isSmallContainer?: boolean;
}

const ArchiveGridPost: FC<Props> = ({
  className = "mt-8 lg:mt-10",
  is_skeleton,
  posts = [],
  isSmallContainer = false,
}) => {
  const getArchivePostCardAndPostCardPlaceholder = () => {
    const postName = frontendObject.archivePostCardType || "card11";
    switch (postName) {
      case "card1":
        return {
          type: 2,
          MainCard: Card1,
          MainCardSkeleton: Card1Skeleton,
        };
      case "card2":
        return {
          type: 3,
          MainCard: Card2,
          MainCardSkeleton: Card2Skeleton,
        };
      case "card3":
        return {
          type: 1,
          MainCard: Card3,
          MainCardSkeleton: Card3Skeleton,
        };
      case "card4":
        return {
          type: 3,
          MainCard: Card4,
          MainCardSkeleton: Card4Skeleton,
        };
      case "card5":
        return {
          type: 3,
          MainCard: Card5,
          MainCardSkeleton: Card5Skeleton,
        };
      case "card6":
        return {
          type: 3,
          MainCard: Card6,
          MainCardSkeleton: Card6Skeleton,
        };
      case "card7":
        return {
          type: 3,
          MainCard: Card7,
          MainCardSkeleton: Card7Skeleton,
        };
      case "card8":
        return {
          type: 1,
          MainCard: Card8,
          MainCardSkeleton: Card8Skeleton,
        };
      case "card9":
        return {
          type: 3,
          MainCard: Card9,
          MainCardSkeleton: Card9Skeleton,
        };
      case "card10":
        return {
          type: 3,
          MainCard: Card10,
          MainCardSkeleton: Card10Skeleton,
        };
      case "card11":
        return {
          type: 3,
          MainCard: Card11,
          MainCardSkeleton: Card11Skeleton,
        };
      case "card12":
        return {
          type: 2,
          MainCard: Card12,
          MainCardSkeleton: Card12Skeleton,
        };
      case "card13":
        return {
          type: 1,
          MainCard: Card13,
          MainCardSkeleton: Card13Skeleton,
        };
      case "card14":
        return {
          type: 2,
          MainCard: Card14,
          MainCardSkeleton: Card14Skeleton,
        };
      case "card16Podcast":
        return {
          type: 2,
          MainCard: Card16Podcast,
          MainCardSkeleton: Card16PodcastSkeleton,
        };
      case "card17Podcast":
        return {
          type: 2,
          MainCard: Card17Podcast,
          MainCardSkeleton: Card17PodcastSkeleton,
        };
      case "card19":
        return {
          type: 2,
          MainCard: Card19,
          MainCardSkeleton: Card19Skeleton,
        };

      default:
        return {
          type: 3,
          MainCard: Card11,
          MainCardSkeleton: Card11Skeleton,
        };
    }
  };

  const WINDOW_WIDTH = useWindowSize().width;
  const IS_SKELETON = is_skeleton;
  const POSTS = posts;
  // TYPE 1 ---- Card3, Card6, Card8, Card13
  // TYPE 2 ---- Card1, Card12, Card14, Card16Podcast, Card17Podcast, Card19
  // TYPE 3  ---- Card11 - Card2, Card4, Card5, Card6, Card7, Card9, Card10

  // let MainCard = frontendObject.archivePostCardType || Card11;
  // let MainCardSkeleton = Card11Skeleton;

  let { MainCard, MainCardSkeleton, type } =
    getArchivePostCardAndPostCardPlaceholder();

  let classes = "";
  if (type === 1) {
    classes = "";
  }
  if (type === 2) {
    classes = "lg:grid-cols-3 ";
  }
  if (type === 3) {
    classes = `lg:grid-cols-3 ${isSmallContainer ? "" : "xl:grid-cols-4"}`;
  }

  return (
    <div>
      {/* LOOP ITEMS */}
      {IS_SKELETON || POSTS.length ? (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${classes} gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 ${className}`}
        >
          {IS_SKELETON &&
            Array.from("88888888").map((_, index) =>
              WINDOW_WIDTH >= 640 ? (
                <MainCardSkeleton key={index} />
              ) : (
                <Card6Skeleton key={index} />
              )
            )}
          {POSTS.map((post) =>
            WINDOW_WIDTH >= 640 ? (
              <MainCard
                imageSizes="MEDIUM"
                key={post.node.id}
                post={post.node}
              />
            ) : (
              <Card6 key={post.node.id} post={post.node} />
            )
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ArchiveGridPost;
