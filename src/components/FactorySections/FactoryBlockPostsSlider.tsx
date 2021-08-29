import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
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

export interface FactoryBlockPostsSliderProps {
  className?: string;
  domNode: Element;
  apiSettings: GutenbergApiAttr_BlockPostsSlider;
}

const FactoryBlockPostsSlider: FC<FactoryBlockPostsSliderProps> = ({
  className = "",
  domNode,
  apiSettings,
}) => {
  const UNIQUE_CLASS = "glide_" + ncNanoId();

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
    variables: variablesFilter,
  });

  const listPosts: ListPosts = data?.posts || {
    edges: [],
  };

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

  const perView = settings.itemPerView;

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
        className={`nc-FactoryBlockPostsSlider relative container ${
          isBg ? "py-16" : ""
        }  ${className}`}
      >
        {isBg && <BackgroundSection />}

        <div className={`${UNIQUE_CLASS}`}>
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
