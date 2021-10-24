import React from "react";

interface Props {
  className?: string;
}

const Buttons: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`space-x-3 mt-5 justify-center flex items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Buttons;
