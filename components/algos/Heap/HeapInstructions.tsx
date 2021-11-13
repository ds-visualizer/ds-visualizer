import React from "react";

interface Props {}

const HeapInstructions: React.FC<Props> = () => {
  return (
    <div className="w-[30rem] bg-gray-800 backdrop-blur-[40px] px-3 py-2 drop-shadow-lg shadow-lg rounded-lg  opacity-[.90] text-gray-400">
      <ul className="flex flex-col space-y-2">
        <li>
          <span className="text-white">Step1:</span> Click Insert or Remove{" "}
        </li>
        <li>
          <span className="text-white">Step2:</span> You can't Inset or Remove,
          if it doesn't satisfy the heap property, then make it a proper heap by
          clicking <strong className="text-gray-200">Next Step</strong>
        </li>
        <li>
          <span className="text-white">Step3:</span> Once its a valid heap you
          will be able to Insert or Remove element
        </li>
      </ul>
    </div>
  );
};

export default HeapInstructions;
