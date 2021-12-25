jQuery(document).ready(function ($) {
  "use strict";

  _toogleHeaderNotifyMessage();
  //   ==========================================
  function _toogleHeaderNotifyMessage() {
    if (!$(".header-notice-message")) {
      return;
    }

    if (localStorage.getItem("ncHeaderNoticeMessage") === "isClosed") {
      $(".header-notice-message").remove();
    } else {
      $(".header-notice-message").addClass("flex");
      $(".header-notice-message").removeClass("hidden");
    }

    $(".header-notice-message__close").click(function (e) {
      e && e.preventDefault();
      $(".header-notice-message").remove();
      localStorage.setItem("ncHeaderNoticeMessage", "isClosed");
    });
  }
});
