import useWindowSize from "hooks/useWindowSize";
import React, { useEffect } from "react";

// COMPOnent nay muc dich chi hide/show header va action voi single header
const HeaderSite = () => {
  const { width } = useWindowSize();
  const windowSizeWidth = width || window.innerWidth;

  //
  const containerRef = document.querySelector<HTMLDivElement>(".nc-Header");
  const mainMenuRef = document.querySelector<HTMLDivElement>(
    ".nc-Header__MainNav1"
  );
  const mainMenuChildRef = document.querySelector<HTMLDivElement>(
    ".nc-Header__MainNav1 .nc-MainNav1"
  );
  let wpadminbarRef = document.querySelector<HTMLDivElement>("#wpadminbar");
  //
  if (!mainMenuRef) {
    return null;
  }
  //

  useEffect(() => {
    setTimeout(() => {
      _scrollHeaderSite();
    }, 200);
  }, []);

  const _handleIsTop = (isTop: boolean) => {
    if (!mainMenuChildRef) return;

    if (isTop && !mainMenuChildRef.classList.contains("onTop")) {
      mainMenuChildRef.classList.remove("notOnTop");
      mainMenuChildRef.classList.add("onTop");
    }

    if (!isTop && !mainMenuChildRef.classList.contains("notOnTop")) {
      mainMenuChildRef.classList.remove("onTop");
      mainMenuChildRef.classList.add("notOnTop");
    }
  };

  const _scrollHeaderSite = () => {
    if (windowSizeWidth <= 600) {
      wpadminbarRef = null;
    }
    //

    let prevScrollpos = window.pageYOffset;
    let mainMenuHeight = 0;
    let wpadminbarHeight = 0;

    let mainMenuH = mainMenuRef.offsetHeight;
    if (!!wpadminbarRef) {
      mainMenuH = mainMenuH - wpadminbarRef.offsetHeight;
      wpadminbarHeight = wpadminbarRef.offsetHeight;
    }
    mainMenuHeight = mainMenuH;

    // FIRST TIME DIDMOUNT
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 0) {
      _handleIsTop(false);
    }
    //

    const handleEvent = () => {
      window.requestAnimationFrame(showHideHeaderMenu);
    };

    window.removeEventListener("scroll", handleEvent);
    window.addEventListener("scroll", handleEvent);

    const showHideHeaderMenu = () => {
      let currentScrollPos = window.pageYOffset;
      if (!containerRef || !mainMenuRef) {
        return;
      }

      // SET BG
      if (prevScrollpos < currentScrollPos) {
        currentScrollPos > mainMenuHeight
          ? _handleIsTop(false)
          : _handleIsTop(true);
      } else {
        currentScrollPos > 0 ? _handleIsTop(false) : _handleIsTop(true);
      }

      // SHOW _ HIDE MAIN MENU
      if (prevScrollpos > currentScrollPos) {
        containerRef.style.top = `${wpadminbarHeight}px`;
      } else {
        containerRef.style.top = `-${mainMenuHeight + 1}px`;
      }
      prevScrollpos = currentScrollPos;
    };

    return null;
  };

  return null;
};

export default HeaderSite;
