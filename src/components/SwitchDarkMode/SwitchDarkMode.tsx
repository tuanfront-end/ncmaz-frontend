import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export interface SwitchDarkModeProps {
  className?: string;
}
const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({
  className = "w-12 h-12",
}) => {
  //
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === "dark");
  //
  const rootEl = document.documentElement;
  //

  useEffect(() => {
    if (localStorage.theme === "dark") {
      if (!rootEl.classList.contains("dark")) {
        rootEl.classList.add("dark");
      }
    } else {
      if (rootEl.classList.contains("dark")) {
        rootEl.classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  useEffect(() => {
    // TINH TOAN KHI NGUOI DUNG SU DUNG O NHIEU NOI
    const a = document.getElementById("dialog-overlay-site-navigation-mobile");
    const b = document.getElementById("btn-close-modal-mobile-sidebar-menu");
    const opens = document.querySelectorAll(".btn-toogle-mobile-sidebar-menu");
    opens?.forEach((element) => {
      element.addEventListener("click", () => {
        setIsDarkMode(localStorage.theme === "dark");
      });
    });
    a?.addEventListener("click", () =>
      setIsDarkMode(localStorage.theme === "dark")
    );
    b?.addEventListener("click", () =>
      setIsDarkMode(localStorage.theme === "dark")
    );
  }, []);

  const handleClick = () => {
    if (isDarkMode) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={handleClick}
      className={`text-2xl md:text-3xl rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${className}`}
    >
      <span className="sr-only">Enable dark mode</span>
      {isDarkMode ? (
        <MoonIcon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
      ) : (
        <SunIcon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
      )}
    </button>
  );
};

export default SwitchDarkMode;
