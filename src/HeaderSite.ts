// COMPOnent nay muc dich chi hide/show header va action voi single header
try {
  const HeaderSite = () => {
    const width = window.innerWidth;
    const windowSizeWidth = width || window.innerWidth;
    let HAS_EVENT_SCROLL: void | null = null;
    let OBSERVER: IntersectionObserver | null = null;
    let OBSERVER_OPTIONS = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    //
    const containerRef = document.querySelector<HTMLDivElement>(".nc-Header");
    const mainMenuRef = document.querySelector<HTMLDivElement>(
      ".nc-Header__MainNav1"
    );
    const mainMenuChildRef = document.querySelector<HTMLDivElement>(
      ".nc-Header__MainNav1 .nc-MainNav1"
    );
    let wpadminbarRef = document.querySelector<HTMLDivElement>("#wpadminbar");
    const anchorHeaderSiteRef =
      document.querySelector<HTMLDivElement>("#anchorHeaderSite");
    //
    if (!mainMenuRef) {
      return null;
    }
    //
    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      // entries.forEach((entry) => {
      //   _handleSiteHeaderIsTop(entry.isIntersecting);
      // });
    };
    if (!OBSERVER) {
      OBSERVER = new IntersectionObserver(
        intersectionCallback,
        OBSERVER_OPTIONS
      );
      anchorHeaderSiteRef && OBSERVER.observe(anchorHeaderSiteRef);
    }

    const _handleSiteHeaderIsTop = (isTop: boolean) => {
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

      let WIN_PREV_POSITION = window.pageYOffset;
      let MAIN_MENU_HEIGHT = 0;
      let WP_ADMIN_BAR_HEIGHT = 0;

      let mainMenuH = mainMenuRef.offsetHeight;
      if (!!wpadminbarRef) {
        mainMenuH = mainMenuH - wpadminbarRef.offsetHeight;
        WP_ADMIN_BAR_HEIGHT = wpadminbarRef.offsetHeight;
      }
      MAIN_MENU_HEIGHT = mainMenuH;

      // FIRST
      if (containerRef && WP_ADMIN_BAR_HEIGHT > 0) {
        containerRef.style.top = `${WP_ADMIN_BAR_HEIGHT}px`;
      }

      const handleEvent = () => {
        window.requestAnimationFrame(showHideHeaderMenu);
      };

      const showHideHeaderMenu = () => {
        let currentScrollPos = window.pageYOffset;
        if (!containerRef || !mainMenuRef) {
          return;
        }
        //
        if (Math.abs(WIN_PREV_POSITION - currentScrollPos) <= 50) {
          return;
        }

        // SHOW _ HIDE MAIN MENU
        if (WIN_PREV_POSITION > currentScrollPos) {
          containerRef.style.top = `${WP_ADMIN_BAR_HEIGHT}px`;
        } else {
          containerRef.style.top = `-${MAIN_MENU_HEIGHT + 2}px`;
        }
        WIN_PREV_POSITION = currentScrollPos;
      };

      if (!HAS_EVENT_SCROLL) {
        HAS_EVENT_SCROLL = window.addEventListener("scroll", handleEvent);
      }

      return null;
    };

    setTimeout(() => {
      _scrollHeaderSite();
    }, 500);

    return null;
  };

  HeaderSite();
} catch (error) {
  console.log(error);
}

export default null;
