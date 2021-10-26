import React from "react";
import routes from "@Misc/routes";
import Card from "./Card";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="py-20 gap-x-6 gap-y-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5   max-w-[1500px]">
      {routes.map((route, index) => (
        <Card route={route} key={index} />
      ))}
    </div>
  );
};

export default Home;
