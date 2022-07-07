import NCMAZ_TRANSLATE from "contains/translate";
import React, { FC } from "react";
import twFocusClass from "utils/twFocusClass";

export interface NextPrevProps {
  containerClassName?: string;
  currentPage?: number;
  totalPage?: number;
  btnClassName?: string;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  onlyNext?: boolean;
  onlyPrev?: boolean;
  disableNext?: boolean;
  disablePrev?: boolean;
  isOfGlide?: boolean;
}

const NextPrev: FC<NextPrevProps> = ({
  containerClassName = "relative",
  onClickNext = () => {},
  onClickPrev = () => {},
  btnClassName = "w-10 h-10",
  onlyNext = false,
  onlyPrev = false,
  isOfGlide = true,
  disableNext,
  disablePrev,
}) => {
  return (
    <div
      className={`nc-NextPrev flex items-center text-neutral-900 dark:text-neutral-300 space-x-2 ${containerClassName}`}
      data-nc-id="NextPrev"
      data-glide-el={isOfGlide ? "controls" : ""}
    >
      {!onlyNext && (
        <button
          className={`${btnClassName} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed ${twFocusClass()}`}
          onClick={onClickPrev}
          title={NCMAZ_TRANSLATE["prev"]}
          data-glide-dir={isOfGlide ? "<" : ""}
          disabled={disablePrev}
        >
          <i className="las la-angle-left"></i>
        </button>
      )}
      {!onlyPrev && (
        <button
          className={`${btnClassName} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed ${twFocusClass()}`}
          onClick={onClickNext}
          title={NCMAZ_TRANSLATE["next"]}
          data-glide-dir={isOfGlide ? ">" : ""}
          disabled={disableNext}
        >
          <i className="las la-angle-right"></i>
        </button>
      )}
    </div>
  );
};

export default NextPrev;
