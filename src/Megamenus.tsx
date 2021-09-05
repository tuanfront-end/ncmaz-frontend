import MegamenuItem from "components/MegamenuItem/MegamenuItem";
import React from "react";

const Megamenus = () => {
  const domNodes = document.querySelectorAll("[data-is-megamenu=true]");

  return (
    <>
      {Array.from(domNodes).map((dom, index) => {
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

export default Megamenus;
