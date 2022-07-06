try {
  jQuery(function () {
    _toogleMobileSidebarMenu();
    _toggleMobileSubmenuItem();
    _toggleNcmazModal();

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

      [...Array.from(ncmazBtnOpens), ...Array.from(ncmazBtnClose)].map(
        (item) => {
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
        }
      );
    }
  });
} catch (error) {
  console.log("-------SomeCustomJsDOM----------", error);
}

export {};
