import React, { useState, useEffect } from "react";

// COMPOnent nay muc dich chi hide/show header va action voi single header
const HeaderSingle = () => {
  const headerSinglePage: HTMLElement | null = document.querySelector(
    ".nc-SingleHeaderMenu"
  );
  const progressBarRef: HTMLElement | null = document.querySelector(
    ".nc-SingleHeaderMenu__progress-bar"
  );
  const entryContent = document.querySelector(
    "#ncmaz-single-entry-content"
  ) as HTMLDivElement | null;

  if (!headerSinglePage) {
    return null;
  }

  //
  const [isSingleHeaderShowing, setIsSingleHeaderShowing] = useState(false);

  useEffect(() => {
    if (isSingleHeaderShowing) {
      headerSinglePage.classList.remove("hidden");
      headerSinglePage.style.display = "block";
      return;
    }
    headerSinglePage.style.display = "none";
  }, [isSingleHeaderShowing]);

  useEffect(() => {
    setTimeout(() => {
      //  BECAUSE DIV HAVE TRANSITION 100ms
      window.addEventListener("scroll", showHideSingleHeader);
    }, 200);
  }, []);

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
