import React from "react";
import { animateScroll } from "react-scroll";

function UpButton() {
  return (
    <button
      className="fixed p-2 rounded-full bottom-4 left-4 opacity-60 hover:opacity-100 bg-accent-800"
      onClick={animateScroll.scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

export default UpButton;
