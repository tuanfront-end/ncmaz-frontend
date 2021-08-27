import React, { FC, useEffect, useRef, useState } from "react";

import MainNav1 from "./MainNav1";

export interface HeaderProps {
  mainNavStyle?: "style1" | "style2";
}

const Header: FC<HeaderProps> = ({ mainNavStyle = "style1" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  //
  let prevScrollpos = window.pageYOffset;
  //
  //
  const [isSingleHeaderShowing, setIsSingleHeaderShowing] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    if (!mainMenuRef.current) {
      return;
    }
    let mainMenuHeight = mainMenuRef.current.offsetHeight;

    window.onscroll = function () {
      showHideHeaderMenu(mainMenuHeight);
    };
  }, []);

  const showHideHeaderMenu = (mainMenuHeight: number) => {
    let currentScrollPos = window.pageYOffset;
    if (!containerRef.current) return;
    if (!mainMenuRef.current) return;

    // SET BG
    if (prevScrollpos < currentScrollPos) {
      currentScrollPos > mainMenuHeight ? setIsTop(false) : setIsTop(true);
    } else {
      currentScrollPos > 0 ? setIsTop(false) : setIsTop(true);
    }

    // SHOW _ HIDE MAIN MENU
    if (prevScrollpos > currentScrollPos) {
      containerRef.current.style.top = "0";
    } else {
      containerRef.current.style.top = `-${mainMenuHeight + 2}px`;
    }
    prevScrollpos = currentScrollPos;
  };

  const renderMainNav = () => {
    switch (mainNavStyle) {
      case "style1":
        return <MainNav1 isTop={isTop} />;

      default:
        return <MainNav1 isTop={isTop} />;
    }
  };

  return (
    <div
      className="nc-Header nc-will-change-top sticky top-0 w-full left-0 right-0 z-40 transition-all"
      ref={containerRef}
    >
      {/* RENDER MAIN NAVIGATION */}
      <div ref={mainMenuRef}>{renderMainNav()}</div>
      <h1>fsfe</h1>
      {/* RENDER PROGESSBAR FOR SINGLE PAGE */}
    </div>
  );
};

export default Header;
