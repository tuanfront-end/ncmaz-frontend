import React, { FC } from "react";

interface CircleLoadingProps {
  className?: string;
  childClassName?: string;
}

const CircleLoading: FC<CircleLoadingProps> = ({
  className = "text-primary-500",
  childClassName = "w-8 h-8",
}) => {
  return (
    <div
      className={`CircleLoading inline-flex items-center justify-center ${className}`}
    >
      <svg
        className={`animate-spin ${childClassName}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-90"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

export default CircleLoading;
