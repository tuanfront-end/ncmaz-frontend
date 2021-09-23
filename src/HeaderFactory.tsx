import HeaderSite from "components/HeaderSite/HeaderSite";
import MegamenuItem from "components/MegamenuItem/MegamenuItem";
import React from "react";

const domNodesMegamenuItem = document.querySelectorAll(
  "[data-is-megamenu=true]"
);

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
            <MegamenuItem
              key={index}
              domNode={dom}
              menuItemData={JSON.parse(graphqlData).menuItem}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      {/* ----------SITE HEADER PROGRESS---------- */}
      <HeaderSite />

      {/* ----------MegamenuItem---------- */}
      {renderPortalMegamenuItem()}
    </>
  );
};

export default HeaderFactory;
