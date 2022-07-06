"use strict";
//   ==========================================
_toogleHeaderNotifyMessage();

function _toogleHeaderNotifyMessage() {
  const headerNoticeMessage = document.querySelector(".header-notice-message");
  const buttonClose = document.querySelector(".header-notice-message__close");
  if (!headerNoticeMessage) {
    return;
  }
  if (
    localStorage.getItem("ncHeaderNoticeMessage") ===
    JSON.stringify(headerNoticeMessage.innerHTML || "")
  ) {
    headerNoticeMessage.style.display = "none";
  } else {
    headerNoticeMessage.style.display = "flex";
  }

  buttonClose.addEventListener("click", () => {
    localStorage.setItem(
      "ncHeaderNoticeMessage",
      JSON.stringify(headerNoticeMessage.innerHTML || "")
    );
    headerNoticeMessage.style.display = "none";
  });
}
