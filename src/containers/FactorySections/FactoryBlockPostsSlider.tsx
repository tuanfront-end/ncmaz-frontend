import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { gql, useLazyQuery } from "@apollo/client";
import { ListPosts, PostNode } from "data/postCardType";
import Heading from "components/Heading/Heading";
import HeaderSectionFilter, {
  HeaderSectionFilterTabItem,
} from "components/HeaderSectionFilter/HeaderSectionFilter";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import Glide from "@glidejs/glide";
import ncNanoId from "utils/ncNanoId";
import Card4 from "components/Card4/Card4";
import Card7 from "components/Card7/Card7";
import Card9 from "components/Card9/Card9";
import Card10 from "components/Card10/Card10";
import Card10V2 from "components/Card10/Card10V2";
import Card11 from "components/Card11/Card11";
import NextPrev from "components/NextPrev/NextPrev";
import Card14 from "components/Card14/Card14";
import { GutenbergApiAttr_BlockPostsSlider } from "data/gutenbergAttrType";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import Card4Skeleton from "components/Card4/Card4Skeleton";
import Card7Skeleton from "components/Card7/Card7Skeleton";
import Card9Skeleton from "components/Card9/Card9Skeleton";
import Card10Skeleton from "components/Card10/Card10Skeleton";
import Card10V2Skeleton from "components/Card10/Card10V2Skeleton";
import Card11Skeleton from "components/Card11/Card11Skeleton";
import Card14Skeleton from "components/Card14/Card14Skeleton";
import {
  GQL_QUERY_GET_POSTS_BY_FILTER,
  GQL_QUERY_GET_POSTS_BY_SPECIFIC,
} from "contains/contants";
import useGqlQuerySection from "hooks/useGqlQuerySection";

interface Data {
  posts: ListPosts;
}

export interface FactoryBlockPostsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockPostsSlider;
  sectionIndex: number;
}

const FactoryBlockPostsSlider: FC<FactoryBlockPostsSliderProps> = ({
  className = "",
  domNode,
  apiSettings,
  sectionIndex,
}) => {
  const UNIQUE_CLASS = "FactoryBlockPostsSlider" + ncNanoId();

  const { graphQLvariables, settings } = apiSettings;

  const [tabActiveId, setTabActiveId] = useState<number>(-1);
  const [variablesFilter, setVariablesFilter] = useState(
    graphQLvariables.variables || {}
  );

  //
  useEffect(() => {
    setVariablesFilter(graphQLvariables.variables);
  }, [graphQLvariables]);

  let GQL_QUERY__string = "";
  if (graphQLvariables.queryString === "GQL_QUERY_GET_POSTS_BY_FILTER") {
    GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_FILTER;
  }
  if (graphQLvariables.queryString === "GQL_QUERY_GET_POSTS_BY_SPECIFIC") {
    GQL_QUERY__string = GQL_QUERY_GET_POSTS_BY_SPECIFIC;
  }
  const queryGql = gql`
    ${GQL_QUERY__string}
  `;

  useEffect(() => {
    setVariablesFilter((variables) => {
      return {
        ...variables,
        categoryIn:
          tabActiveId === -1
            ? graphQLvariables.variables?.categoryIn
            : [tabActiveId],
      };
    });
  }, [tabActiveId]);

  const [gqlQueryGetPosts, { loading, error, data }] = useLazyQuery<Data>(
    queryGql,
    {
      notifyOnNetworkStatusChange: true,
      variables: variablesFilter,
    }
  );

  // =========================================================
  const { ref } = useGqlQuerySection(gqlQueryGetPosts, sectionIndex);
  // =========================================================
  //
  const LISTS_POSTS = data?.posts.edges || [];
  const IS_SKELETON = loading && !LISTS_POSTS.length;

  const handleClickTab = (item: -1 | HeaderSectionFilterTabItem) => {
    if (item === -1) {
      setTabActiveId(item);
      return;
    }
    if (item.id === tabActiveId) {
      return;
    }
    setTabActiveId(item.id);
  };

  const enableNexPrevOnFoot =
    settings.blockLayoutStyle === "layout-2" || settings.showFilterTab;

  // ==================== GLIDE SLIDER SETTING ====================
  const perView = settings.itemPerView || 5;
  const sliderConfiguration = {
    perView: perView,
    gap: 32,
    bound: true,
    breakpoints: {
      1280: {
        perView: perView - 1,
      },
      1023: {
        perView: perView - 2 || 1.3,
        gap: 24,
      },
      767: {
        perView: perView - 2 || 1.3,
        gap: 20,
      },
      639: {
        perView: 1.3,
        gap: 20,
      },
    },
  };
  const glideSlider = new Glide(`.${UNIQUE_CLASS}`, sliderConfiguration);
  useEffect(() => {
    glideSlider.mount();
  }, [data, glideSlider]);

  const renderPostComponent = (post: PostNode) => {
    switch (apiSettings.settings.postCardName) {
      case "card4":
        return (
          <Card4
            post={post}
            className={!enableNexPrevOnFoot ? "hover:!shadow-sm" : undefined}
          />
        );
      case "card7":
        return <Card7 post={post} />;
      case "card9":
        return <Card9 post={post} />;
      case "card10":
        return <Card10 post={post} />;
      case "card10V2":
        return <Card10V2 post={post} />;
      case "card11":
        return (
          <Card11
            post={post}
            className={!enableNexPrevOnFoot ? "hover:!shadow-sm" : undefined}
          />
        );
      case "card14":
        return <Card14 post={post} />;
      default:
        return (
          <Card4
            className={!enableNexPrevOnFoot ? "hover:!shadow-sm" : undefined}
            post={post}
          />
        );
    }
  };

  const renderPostComponentLoading = () => {
    switch (apiSettings.settings.postCardName) {
      case "card4":
        return (
          <Card4Skeleton
            className={!enableNexPrevOnFoot ? "hover:!shadow-sm" : undefined}
          />
        );
      case "card7":
        return <Card7Skeleton />;
      case "card9":
        return <Card9Skeleton />;
      case "card10":
        return <Card10Skeleton />;
      case "card10V2":
        return <Card10V2Skeleton />;
      case "card11":
        return (
          <Card11Skeleton
            className={!enableNexPrevOnFoot ? "hover:!shadow-sm" : undefined}
          />
        );
      case "card14":
        return <Card14Skeleton />;
      default:
        return (
          <Card4Skeleton
            className={!enableNexPrevOnFoot ? "hover:!shadow-sm" : undefined}
          />
        );
    }
  };

  const renderHeading = () => {
    const { heading, subHeading, blockLayoutStyle } = apiSettings.settings;
    if (blockLayoutStyle === "layout-1") {
      return (
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
      );
    }
    return (
      <Heading desc={subHeading} isCenter>
        {heading}
      </Heading>
    );
  };

  const renderContent = () => {
    const {
      hasBackground,
      subHeading,
      heading,
      showFilterTab,
      categories,
      viewMoreHref,
    } = settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockPostsSlider relative  ${
          isBg ? "py-16" : ""
        }  ${className}`}
        ref={ref}
      >
        {isBg && <BackgroundSection />}

        <div className={`relative ${UNIQUE_CLASS}`}>
          {showFilterTab ? (
            <HeaderSectionFilter
              tabActiveId={tabActiveId}
              tabs={categories}
              viewMoreHref={viewMoreHref}
              heading={heading}
              subHeading={subHeading}
              onClickTab={handleClickTab}
            />
          ) : (
            renderHeading()
          )}

          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {IS_SKELETON
                ? [1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                    <li
                      key={index}
                      className={`glide__slide ${
                        enableNexPrevOnFoot ? "pb-12 xl:pb-16" : ""
                      }`}
                    >
                      {renderPostComponentLoading()}
                    </li>
                  ))
                : LISTS_POSTS.map((item, index) => (
                    <li
                      key={index}
                      className={`glide__slide ${
                        enableNexPrevOnFoot ? "pb-12 xl:pb-16" : ""
                      }`}
                    >
                      {renderPostComponent(item.node)}
                    </li>
                  ))}
            </ul>
          </div>

          {/* ------------ */}
          <DataStatementBlockV2
            className="my-5"
            data={LISTS_POSTS}
            error={error}
            isSkeleton={IS_SKELETON}
          />

          {/* ------------ */}

          {enableNexPrevOnFoot && (
            <NextPrev
              btnClassName="w-12 h-12"
              containerClassName="justify-center"
            />
          )}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockPostsSlider;
