import React, { useEffect } from "react";
import useWindowSize from "hooks/useWindowSize";

// COMPOnent nay muc dich chi hide/show header va action voi single header
const HeaderSite = () => {
  const containerEl = document.querySelector<HTMLDivElement>(".nc-Header");
  const mainMenuEl = document.querySelector<HTMLDivElement>(
    ".nc-Header__MainNav1"
  );
  const mainMenuChildEl = document.querySelector<HTMLDivElement>(
    ".nc-Header__MainNav1 .nc-MainNav1"
  );
  let wpadminbarEl = document.querySelector<HTMLDivElement>("#wpadminbar");
  //
  if (!containerEl || !mainMenuEl) {
    return null;
  }

  //
  const { width } = useWindowSize();
  const windowSizeWidth = width || window.innerWidth;
  if (windowSizeWidth <= 600) {
    wpadminbarEl = null;
  }
  //
  let prevScrollpos = window.pageYOffset;
  //

  const setIsTop = (isTop: boolean) => {
    if (!mainMenuChildEl) return;

    if (isTop && !mainMenuChildEl.classList.contains("onTop")) {
      mainMenuChildEl.classList.remove("notOnTop");
      mainMenuChildEl.classList.add("onTop");
    }

    if (!isTop && !mainMenuChildEl.classList.contains("notOnTop")) {
      mainMenuChildEl.classList.remove("onTop");
      mainMenuChildEl.classList.add("notOnTop");
    }
  };

  useEffect(() => {
    let mainMenuHeight = mainMenuEl.offsetHeight;
    let wpadminbarHeight = 0;
    if (!!wpadminbarEl) {
      mainMenuHeight = mainMenuHeight - wpadminbarEl.offsetHeight;
      wpadminbarHeight = wpadminbarEl.offsetHeight;
    }

    // FIRST TIME DIDMOUNT
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 0) {
      setIsTop(false);
    }
    //
    window.addEventListener("scroll", function () {
      window.requestAnimationFrame(function () {
        showHideHeaderMenu(mainMenuHeight, wpadminbarHeight);
      });
    });
  }, [windowSizeWidth]);

  const showHideHeaderMenu = (
    mainMenuHeight: number,
    wpadminbarHeight: number
  ) => {
    let currentScrollPos = window.pageYOffset;

    // SET BG
    if (prevScrollpos < currentScrollPos) {
      currentScrollPos > mainMenuHeight ? setIsTop(false) : setIsTop(true);
    } else {
      currentScrollPos > 0 ? setIsTop(false) : setIsTop(true);
    }

    // SHOW _ HIDE MAIN MENU
    if (prevScrollpos > currentScrollPos) {
      containerEl.style.top = `${wpadminbarHeight}px`;
    } else {
      containerEl.style.top = `-${mainMenuHeight + 2}px`;
    }
    prevScrollpos = currentScrollPos;
  };

  return null;
};

export default HeaderSite;
