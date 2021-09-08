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

  const headerSinglePage: HTMLDivElement | null = document.querySelector(
    ".nc-SingleHeaderMenu"
  );
  const progressBarRef: HTMLDivElement | null = document.querySelector(
    ".nc-SingleHeaderMenu__progress-bar"
  );

  const wpadminbarRef: HTMLDivElement | null =
    document.querySelector("#wpadminbar");
  //

  let prevScrollpos = window.pageYOffset;
  //
  const showSingleMenu = !!headerSinglePage;
  //
  const [isSingleHeaderShowing, setIsSingleHeaderShowing] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    if (!headerSinglePage) return;

    if (isSingleHeaderShowing) {
      headerSinglePage.style.display = "block";
      return;
    }
    headerSinglePage.style.display = "none";
  }, [isSingleHeaderShowing]);

  //
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

    window.onscroll = function () {
      showHideHeaderMenu(mainMenuHeight);
    };
  }, []);

  useEffect(() => {
    if (showSingleMenu) {
      setTimeout(() => {
        //  BECAUSE DIV HAVE TRANSITION 100ms
        window.addEventListener("scroll", showHideSingleHeader);
      }, 200);
    } else {
      window.removeEventListener("scroll", showHideSingleHeader);
    }
  }, [showSingleMenu]);

  const handleProgressIndicator = () => {
    const entryContent = document.querySelector(
      "#ncmaz-single-entry-content"
    ) as HTMLDivElement | null;

    if (!showSingleMenu || !entryContent) {
      return;
    }

    const totalEntryH = entryContent.offsetTop + entryContent.offsetHeight;
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let scrolled = (winScroll / totalEntryH) * 100;
    if (!progressBarRef || scrolled > 140) {
      return;
    }

    scrolled = scrolled > 100 ? 100 : scrolled;

    progressBarRef.style.width = scrolled + "%";
  };

  const showHideSingleHeader = () => {
    handleProgressIndicator();
    // SHOW _ HIDE SINGLE DESC MENU
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 200) {
      setIsSingleHeaderShowing(true);
    } else {
      setIsSingleHeaderShowing(false);
    }
  };

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
