import React from "react";

interface Props {
  className?: string;
}

const Background: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`  w-full items-center h-[18rem] flex ${
        className?.match("flex-row") ? "flex-row" : "flex-col"
      } ${className} justify-center pt-2  bg-secondary text-secondary overflow-scroll `}
    >
      {children}
    </div>
  );
};

export default Background;
