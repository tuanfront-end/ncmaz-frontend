import ErrorBoundary from "ErrorBoundary";
import React, { Suspense } from "react";

// const HeaderSiteLazy = React.lazy(
//   () => import("components/HeaderSite/HeaderSite")
// );

// const HeaderSingleLazy = React.lazy(
//   () => import("components/HeaderSite/HeaderSingle")
// );

const MegamenuItemLazy = React.lazy(
  () => import("components/MegamenuItem/MegamenuItem")
);

const domNodesMegamenuItem = document.querySelectorAll(
  "[data-is-megamenu=true]"
);

// const headerSinglePageNode: HTMLElement | null = document.querySelector(
//   ".nc-SingleHeaderMenu"
// );

const HeaderFactory = () => {
  const renderPortalMegamenuItem = () => {
    return (
      <>
        {Array.from(domNodesMegamenuItem).map((dom, index) => {
          const graphqlData = dom.getAttribute("data-graphql");
          if (!graphqlData || graphqlData === "null") {
            return null;
          }

          return (
            <ErrorBoundary key={index}>
              <Suspense fallback={<div />}>
                <MegamenuItemLazy
                  key={index}
                  domNode={dom}
                  menuItemData={JSON.parse(graphqlData).menuItem}
                />
              </Suspense>
            </ErrorBoundary>
          );
        })}
      </>
    );
  };

  return (
    <>
      {/* ----------SITE HEADER PROGRESS---------- */}
      {/* <ErrorBoundary> */}
      {/* <Suspense fallback={<div />}>
          <HeaderSiteLazy />
        </Suspense> */}

      {/* {!!headerSinglePageNode && (
          <Suspense fallback={<div />}>
            <HeaderSingleLazy />
          </Suspense>
        )} */}
      {/* </ErrorBoundary> */}

      {/* ----------MegamenuItem---------- */}
      {renderPortalMegamenuItem()}
    </>
  );
};

export default HeaderFactory;
