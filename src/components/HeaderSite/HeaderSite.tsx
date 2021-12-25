import useWindowSize from "hooks/useWindowSize";
import React, { useState, useEffect } from "react";

// COMPOnent nay muc dich chi hide/show header va action voi single header
const HeaderSite = () => {
  const containerRef: HTMLDivElement | null =
    document.querySelector(".nc-Header");
  const mainMenuRef: HTMLDivElement | null = document.querySelector(
    ".nc-Header__MainNav1"
  );
  const mainMenuChildRef: HTMLDivElement | null = document.querySelector(
    ".nc-Header__MainNav1 .nc-MainNav1"
  );
  let wpadminbarRef: HTMLDivElement | null =
    document.querySelector("#wpadminbar");
  //

  const { width } = useWindowSize();
  const windowSizeWidth = width;

  if (windowSizeWidth <= 600) {
    wpadminbarRef = null;
  } else {
    wpadminbarRef = document.querySelector("#wpadminbar");
  }

  let prevScrollpos = window.pageYOffset;
  //
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    if (!mainMenuChildRef) return;

    if (isTop && !mainMenuChildRef.classList.contains("onTop")) {
      mainMenuChildRef.classList.remove("notOnTop");
      mainMenuChildRef.classList.add("onTop");
    }

    if (!isTop && !mainMenuChildRef.classList.contains("notOnTop")) {
      mainMenuChildRef.classList.remove("onTop");
      mainMenuChildRef.classList.add("notOnTop");
    }
  }, [isTop]);

  useEffect(() => {
    if (!mainMenuRef) {
      return;
    }
    let mainMenuHeight = mainMenuRef.offsetHeight;
    if (!!wpadminbarRef) {
      mainMenuHeight = mainMenuHeight - wpadminbarRef.offsetHeight;
    }

    // FIRST TIME DIDMOUNT
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 0) {
      setIsTop(false);
    }
    //
    window.addEventListener("scroll", function () {
      showHideHeaderMenu(mainMenuHeight);
    });
  }, [windowSizeWidth]);

  const showHideHeaderMenu = (mainMenuHeight: number) => {
    let currentScrollPos = window.pageYOffset;
    if (!containerRef || !mainMenuRef) return;

    // SET BG
    if (prevScrollpos < currentScrollPos) {
      currentScrollPos > mainMenuHeight ? setIsTop(false) : setIsTop(true);
    } else {
      currentScrollPos > 0 ? setIsTop(false) : setIsTop(true);
    }

    // SHOW _ HIDE MAIN MENU
    if (prevScrollpos > currentScrollPos) {
      containerRef.style.top = wpadminbarRef
        ? `${wpadminbarRef.offsetHeight}px`
        : "0";
    } else {
      containerRef.style.top = `-${mainMenuHeight + 2}px`;
    }
    prevScrollpos = currentScrollPos;
  };

  return null;
};

export default HeaderSite;
