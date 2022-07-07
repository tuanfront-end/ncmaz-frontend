import React, { useState, useEffect } from "react";
import _ from "lodash";

// COMPOnent nay muc dich chi hide/show header va action voi single header
const HeaderSingle = () => {
  const headerSinglePage = document.querySelector<HTMLElement>(
    ".nc-SingleHeaderMenu"
  );
  const progressBarRef = document.querySelector<HTMLElement>(
    ".nc-SingleHeaderMenu__progress-bar"
  );
  const entryContent = document.querySelector<HTMLElement>(
    "#ncmaz-single-entry-content"
  );

  if (!headerSinglePage) {
    return null;
  }

  // -z-50 opacity-0 -translate-y-full
  const _setIsSingleHeaderShowing = (isSingleHeaderShowing: boolean) => {
    if (isSingleHeaderShowing) {
      headerSinglePage.style.zIndex = "1";
      headerSinglePage.style.opacity = "1";
      headerSinglePage.style.visibility = "visible";
      return;
    }
    headerSinglePage.style.zIndex = "-50";
    headerSinglePage.style.opacity = "0";
    headerSinglePage.style.visibility = "hidden";
  };

  useEffect(() => {
    //  BECAUSE DIV HAVE TRANSITION 100ms
    setTimeout(() => {
      window.addEventListener("scroll", function () {
        window.requestAnimationFrame(handleProgressIndicator);
      });
      window.addEventListener("scroll", _.debounce(handleHeaderShowing, 100));
    }, 100);
  }, []);

  const handleHeaderShowing = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    _setIsSingleHeaderShowing(winScroll > 400);
  };

  const handleProgressIndicator = () => {
    if (!entryContent) {
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

  return null;
};

export default HeaderSingle;
