import React from "react";
import NavigationItem from "./NavigationItem";

function Navigation() {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
      {([] as any[]).map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
