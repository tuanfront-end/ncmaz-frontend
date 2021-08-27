import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useQuery } from "@apollo/client";
import {
  POSTS_SECTION_BY_FILTER,
  POSTS_SECTION_SPECIFIC,
} from "graphql/getPosts";
import { NcGutenbergApiAttr_BlockPostsSlider } from "App";
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

export interface FactoryBlockPostsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: NcGutenbergApiAttr_BlockPostsSlider;
}

const FactoryBlockPostsSlider: FC<FactoryBlockPostsSliderProps> = ({
  className = "",
  domNode,
  apiSettings,
}) => {
  const [tabActiveId, setTabActiveId] = useState<number>(-1);

  const [variablesFilter, setVariablesFilter] = useState({});

  const UNIQUE_CLASS = "glide_" + ncNanoId();

  useEffect(() => {
    const variables =
      apiSettings.option === "by_post_specific"
        ? { nameIn: apiSettings.params.slug }
        : {
            categoryIn: apiSettings.params.categories || [],
            tagIn: apiSettings.params?.tags || [],
            authorIn: apiSettings.params?.authors || [],
            order: apiSettings.params?.order,
            field: apiSettings.params?.orderBy,
            last: null,
            first: apiSettings.params.per_page,
            before: null,
            after: null,
          };
    setVariablesFilter(variables);
  }, []);

  useEffect(() => {
    if (apiSettings.option === "by_post_specific") {
      return;
    }
    setVariablesFilter((variables) => {
      return {
        ...variables,
        categoryIn:
          tabActiveId === -1 ? apiSettings.params.categories : [tabActiveId],
      };
    });
  }, [tabActiveId]);

  const { loading, error, data } = useQuery(
    apiSettings.option === "by_post_specific"
      ? POSTS_SECTION_SPECIFIC
      : POSTS_SECTION_BY_FILTER,
    {
      variables: variablesFilter,
    }
  );

  const listPosts: ListPosts = data?.posts || {
    edges: [],
  };

  const enableNexPrevOnFoot =
    apiSettings.settings.blockLayoutType === "type-2" ||
    (apiSettings.option === "by_filter" && apiSettings.settings.showFilterTab);

  const perView = apiSettings.settings.itemPerView;

  useEffect(() => {
    if (!data) return;
    if (!listPosts.edges.length) {
      return;
    }

    new Glide(`.${UNIQUE_CLASS}`, {
      perView: perView,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: perView - 1,
        },
        1023: {
          perView: perView - 2 || 1,
          gap: 24,
        },
        767: {
          perView: perView - 2 || 1,
          gap: 20,
        },
        639: {
          perView: 1,
          gap: 20,
        },
      },
    }).mount();
  }, [data]);

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
        return <Card4 post={post} />;
    }
  };

  const renderHeading = () => {
    const { heading, subHeading, blockLayoutType } = apiSettings.settings;
    if (blockLayoutType === "type-1") {
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
    const { hasBackground, subHeading, heading } = apiSettings.settings;
    const isBg = hasBackground;

    return (
      <div
        className={`nc-FactoryBlockPostsSlider relative container ${
          isBg ? "py-16" : ""
        }  ${className}`}
      >
        {isBg && <BackgroundSection />}

        <div className={`${UNIQUE_CLASS}`}>
          {apiSettings.option === "by_filter" &&
          apiSettings.settings.showFilterTab ? (
            <HeaderSectionFilter
              tabActiveId={tabActiveId}
              tabs={apiSettings.settings.categoriesFilter}
              viewMoreHref={apiSettings.settings.viewMoreHref}
              heading={heading}
              subHeading={subHeading}
              onClickTab={handleClickTab}
            />
          ) : (
            renderHeading()
          )}
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {listPosts.edges.map((item, index) => (
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
          {loading && !listPosts.edges.length && (
            <span className="text-lg"> LOADING .............</span>
          )}
          {error && (
            <pre className="text-xs">
              <code>{JSON.stringify(error)}</code>
            </pre>
          )}

          {!listPosts.edges.length && !loading && (
            <span className="text-lg block">Nothing we found!</span>
          )}
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
