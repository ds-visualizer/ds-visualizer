import React from "react";
import NavBar from "./NavBar";
import Progress from "./Progress";

interface Props {}

const index: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      <NavBar />
      {children}
      <Progress />
    </div>
  );
};

export default index;
