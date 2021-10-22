import React from "react";

interface Props {}

const Background: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full items-center h-[18rem] flex flex-col justify-center pt-2  bg-secondary text-secondary">
      {children}
    </div>
  );
};

export default Background;
