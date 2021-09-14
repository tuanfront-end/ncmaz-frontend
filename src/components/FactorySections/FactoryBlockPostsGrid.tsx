import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import { ListPosts, PostNode } from "data/postCardType";
import Heading from "components/Heading/Heading";
import HeaderSectionFilter, {
  HeaderSectionFilterTabItem,
} from "components/HeaderSectionFilter/HeaderSectionFilter";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import Card4 from "components/Card4/Card4";
import Card7 from "components/Card7/Card7";
import Card9 from "components/Card9/Card9";
import Card10 from "components/Card10/Card10";
import Card10V2 from "components/Card10/Card10V2";
import Card11 from "components/Card11/Card11";
import Card14 from "components/Card14/Card14";
import Card15Podcast from "components/Card15Podcast/Card15Podcast";
import Card3 from "components/Card3/Card3";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { GutenbergApiAttr_BlockPostsGrid } from "data/gutenbergAttrType";
import EmptyState from "components/EmptyState/EmptyState";
import DataStatementBlock from "components/DataStatementBlock/DataStatementBlock";

export interface FactoryBlockPostsGridProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockPostsGrid;
}

let LISTS_POSTS: ListPosts = {
  edges: [],
};

const FactoryBlockPostsGrid: FC<FactoryBlockPostsGridProps> = ({
  className = "",
  domNode,
  apiSettings,
}) => {
  const { graphQLvariables, settings } = apiSettings;

  const [tabActiveId, setTabActiveId] = useState<number>(-1);
  const [variablesFilter, setVariablesFilter] = useState(
    graphQLvariables.variables || {}
  );

  //
  useEffect(() => {
    setVariablesFilter(graphQLvariables.variables);
  }, [graphQLvariables]);

  const queryGql = gql`
    ${graphQLvariables.queryString}
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

  const { loading, error, data } = useQuery(queryGql, {
    notifyOnNetworkStatusChange: true,
    variables: variablesFilter,
  });

  //
  if (data) {
    LISTS_POSTS = data?.posts;
  }

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

  const renderCard = (post: PostNode) => {
    switch (apiSettings.settings.postCardName) {
      case "card3":
        return (
          <Card3
            key={post.id}
            isSkeleton={loading}
            className="p-3 sm:p-5 2xl:p-6 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]"
            post={post}
          />
        );
      case "card4":
        return <Card4 key={post.id} isSkeleton={loading} post={post} />;
      case "card7":
        return (
          <Card7
            key={post.id}
            post={post}
            isSkeleton={loading}
            ratio="aspect-w-5 aspect-h-5"
          />
        );
      case "card9":
        return <Card9 key={post.id} isSkeleton={loading} post={post} />;
      case "card10":
        return <Card10 key={post.id} isSkeleton={loading} post={post} />;
      case "card10V2":
        return <Card10V2 key={post.id} isSkeleton={loading} post={post} />;
      case "card11":
        return <Card11 key={post.id} isSkeleton={loading} post={post} />;
      case "card14":
        return <Card14 key={post.id} isSkeleton={loading} post={post} />;
      case "card15Podcast":
        return <Card15Podcast key={post.id} isSkeleton={loading} post={post} />;
      default:
        return null;
    }
  };

  const renderHeading = () => {
    const { heading, subHeading, blockLayoutStyle } = settings;
    if (blockLayoutStyle === "layout-1") {
      return <Heading desc={subHeading}>{heading}</Heading>;
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
      heading,
      subHeading,
      viewMoreHref,
      gridClass,
      gridClassCustom,
      showFilterTab,
    } = settings;
    const isBg = hasBackground;

    const showViewMoreBtn = !showFilterTab && viewMoreHref;

    return (
      <div
        className={`nc-FactoryBlockPostsGrid relative ${
          isBg ? "py-16" : ""
        }  ${className}`}
      >
        {isBg && <BackgroundSection />}

        <div className="">
          {showFilterTab ? (
            <HeaderSectionFilter
              tabActiveId={tabActiveId}
              tabs={settings.categories}
              viewMoreHref={viewMoreHref}
              heading={heading}
              subHeading={subHeading}
              onClickTab={handleClickTab}
            />
          ) : (
            renderHeading()
          )}
          <div
            className={`grid gap-6 md:gap-8 ${
              !!gridClassCustom ? gridClassCustom : gridClass
            }`}
          >
            {LISTS_POSTS.edges.map((post) => renderCard(post.node))}
          </div>

          {/* ------------ */}
          <DataStatementBlock
            loading={loading}
            error={error}
            data={LISTS_POSTS.edges}
          />
          {/* ------------ */}

          {showViewMoreBtn && (
            <div className="flex mt-20 justify-center items-center">
              <ButtonPrimary href={viewMoreHref}>Show me more</ButtonPrimary>
            </div>
          )}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderContent(), domNode);
};

export default FactoryBlockPostsGrid;
