// On page load or when changing themes, best to add inline in `head` to avoid FOUC

"use strict";

if (!localStorage.theme) {
  console.log(1111, window.frontendObject);

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
