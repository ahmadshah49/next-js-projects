import React from "react";

const EmptyState = () => {
  return (
    <div
      className="
      px-4
      py-10
      sm:px-8
      h-full
      flex 
      justify-center
      items-center 
      bg-gray-200
"
    >
      <div
        className="
      text-center 
      flex
      flex-col 
      items-center 
      "
      >
        <h1
          className="
        mt-2
        text-2xl
        font-semibold
        text-gray-900
        "
        >
          Select a chat & start new conversation
        </h1>
      </div>
    </div>
  );
};

export default EmptyState;
