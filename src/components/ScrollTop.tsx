import React, { useEffect, useRef } from "react";
import debounce from "utils/debounce";

const ScrollTop = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", debounce(caculatorScroll, 300));
  }, []);

  function caculatorScroll() {
    if (!ref.current) {
      return;
    }
    if (
      document.body.scrollTop > 800 ||
      document.documentElement.scrollTop > 800
    ) {
      if (ref.current.style.display === "flex") {
        return;
      }
      ref.current.style.display = "flex";
    } else {
      if (ref.current.style.display === "none") {
        return;
      }
      ref.current.style.display = "none";
    }
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={ref}
      className={`ScrollTop w-10 h-10 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 items-center justify-center rounded-full text-xl fixed bottom-6 right-5 z-50 transition-opacity text-white dark:text-neutral-300`}
      onClick={handleClick}
    >
      <i className="las la-arrow-up"></i>
    </button>
  );
};

export default ScrollTop;
