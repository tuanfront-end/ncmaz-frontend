import ButtonPrimary from "components/Button/ButtonPrimary";
import HeaderSite from "components/HeaderSite/HeaderSite";
import MegamenuItem from "components/MegamenuItem/MegamenuItem";
import SearchDropdown from "components/SearchDropdown/SearchDropdown";
import SwitchDarkMode from "components/SwitchDarkMode/SwitchDarkMode";
import React from "react";
import ReactDOM from "react-dom";

const domNodesMegamenuItem = document.querySelectorAll(
  "[data-is-megamenu=true]"
);

const domNodesHeaderRight = document.querySelector(
  "[data-react-header-right-area=true]"
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

  const renderHeaderRight = () => {
    const isShowDarkmode = domNodesHeaderRight?.getAttribute(
      "data-show-toogleDarkmode"
    );
    return (
      <>
        <div className="hidden items-center xl:flex space-x-1">
          {isShowDarkmode !== "0" && <SwitchDarkMode />}
          <SearchDropdown />
          <div className="px-1" />
          <ButtonPrimary href="/login">Sign up</ButtonPrimary>
        </div>
      </>
    );
  };

  return (
    <>
      {/* ----------SITE HEADER PROGRESS---------- */}
      <HeaderSite />

      {/* ----------MegamenuItem---------- */}
      {renderPortalMegamenuItem()}

      {/* -----HEADER RIGHT-------- */}
      {domNodesHeaderRight &&
        ReactDOM.createPortal(renderHeaderRight(), domNodesHeaderRight)}
    </>
  );
};

export default HeaderFactory;
