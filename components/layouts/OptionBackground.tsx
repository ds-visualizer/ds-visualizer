import React from "react";

interface Props {
  className?: string;
}

const Background: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`  w-full items-center flex ${
        className?.match("flex-row") ? "flex-row" : "flex-col"
      } ${className} justify-center pt-8  text-primary overflow-hidden `}
    >
      {children}
    </div>
  );
};

export default Background;
