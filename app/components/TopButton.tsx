"use client";

import { ArrowUp } from "lucide-react";

export const TopButton = () => {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-5 right-5 w-10 h-10 md:w-14 md:h-14 rounded-full bg-green-base flex justify-center items-center hover:bg-green-700 hover:transition-colors"
    >
      <ArrowUp />
    </button>
  );
};
