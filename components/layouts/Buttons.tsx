import React from "react";

interface Props {}

const Buttons: React.FC<Props> = ({ children }) => {
  return (
    <div className="space-x-3 mt-5 justify-center flex items-center">
      {children}
    </div>
  );
};

export default Buttons;
