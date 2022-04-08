// On page load or when changing themes, best to add inline in `head` to avoid FOUC

"use strict";

if (!localStorage.theme) {
  if (
    window.frontendObject &&
    window.frontendObject.defaultThemeMode === "dark"
  ) {
    localStorage.theme = "dark";
  }
}

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
