try {
  let IS_OK = false;
  let interval = setInterval(() => {
    if (typeof jQuery !== "function") {
      return;
    }
    if (IS_OK) {
      clearInterval(interval);
      return;
    }
    clearInterval(interval);
    IS_OK = true;
    startRunAll();
  }, 1000);

  function startRunAll() {
    _toogleMobileSidebarMenu();
    _toggleMobileSubmenuItem();
    _toggleNcmazModal();
    _converViewCountToThounsand(".nc-SingleMetaAction2__views__number");
    _converViewCountToThounsand(".simplefavorite-button-count");
  }

  //   ==========================================
  function _toggleMobileSubmenuItem() {
    jQuery("#mobile-menu-list .menu-item-has-children .icon-after-menu").on(
      "click",
      function (e) {
        e.preventDefault();
        jQuery(this).parent().siblings().toggle();
      }
    );
  }
  //   ==========================================
  function _toogleMobileSidebarMenu() {
    jQuery(".btn-toogle-mobile-sidebar-menu").on("click", function () {
      jQuery("#site-navigation-mobile").fadeToggle(200);
    });
    jQuery("#dialog-overlay-site-navigation-mobile").on("click", function () {
      jQuery("#site-navigation-mobile").fadeToggle(200);
    });
    jQuery("#btn-close-modal-mobile-sidebar-menu").on("click", function () {
      jQuery("#site-navigation-mobile").fadeToggle(200);
    });
  }
  //   ==========================================
  function _toggleNcmazModal() {
    // GET ALL BUTTON OPEN MODAL
    let ncmazBtnOpens = document.querySelectorAll("[data-ncmaz-open-modal]");
    // GET ALL BUTTON CLOSE MODAL
    let ncmazBtnClose = document.querySelectorAll("[data-ncmaz-close-modal]");
    if (!ncmazBtnOpens.length) {
      return;
    }

    [...Array.from(ncmazBtnOpens), ...Array.from(ncmazBtnClose)].map((item) => {
      if (
        !item.getAttribute("data-ncmaz-open-modal") &&
        !item.getAttribute("data-ncmaz-close-modal")
      ) {
        return;
      }

      item.addEventListener("click", (e) => {
        e.preventDefault();
        // 0pen modal
        if (item.hasAttribute("data-ncmaz-open-modal")) {
          jQuery(
            `[data-ncmaz-modal-name='${item.getAttribute(
              "data-ncmaz-open-modal"
            )}']`
          ).fadeIn(200);
        }

        // Close modal
        if (item.hasAttribute("data-ncmaz-close-modal")) {
          jQuery(
            `[data-ncmaz-modal-name='${item.getAttribute(
              "data-ncmaz-close-modal"
            )}']`
          ).fadeOut(200);
        }
      });
    });
  }
  //  ==========================================
  function _converViewCountToThounsand(
    Elclass = ".nc-SingleMetaAction2__views__number"
  ) {
    const viewCountsEls = jQuery(Elclass);
    if (!viewCountsEls || !viewCountsEls.length) {
      return;
    }

    viewCountsEls.each(function () {
      const viewCounts = jQuery(this).text();
      const viewCountsInt = parseInt(viewCounts);
      if (viewCountsInt > 1000) {
        jQuery(this).text(`${(viewCountsInt / 1000).toFixed(1)}k`);
      }
    });
  }
} catch (error) {
  console.log("-------SomeCustomJsDOM----------", error);
}

export default {};
