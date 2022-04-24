"use strict";

//   ========  toggle DarkMode ==================================
_toggleDarkMode();
function _toggleDarkMode() {
  if (!localStorage.theme) {
    if (
      ncmazFrontendDarkmode &&
      ncmazFrontendDarkmode.defaultThemeMode === "dark"
    ) {
      localStorage.theme = "dark";
    }
  }

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    !document.documentElement.classList.contains("dark") &&
      document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

//   ========  JQuery aready loaded ==================================
jQuery(document).ready(function ($) {
  "use strict";

  _toogleHeaderNotifyMessage();

  //   ==========================================
  function _toogleHeaderNotifyMessage() {
    if (!$(".header-notice-message")) {
      return;
    }

    if (
      localStorage.getItem("ncHeaderNoticeMessage") ===
      JSON.stringify($(".header-notice-message").text() || "")
    ) {
      $(".header-notice-message").remove();
    } else {
      $(".header-notice-message").addClass("flex");
      $(".header-notice-message").removeClass("hidden");
    }

    $(".header-notice-message__close").click(function (e) {
      e && e.preventDefault();
      localStorage.setItem(
        "ncHeaderNoticeMessage",
        JSON.stringify($(".header-notice-message").text() || "")
      );
      $(".header-notice-message").remove();
    });
  }
});
