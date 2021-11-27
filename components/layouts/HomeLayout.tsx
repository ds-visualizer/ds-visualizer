import React from "react";
import IRoute from "@Interfaces/Route";
import Card from "../pages/Home/Card";

interface Props {
  routes: IRoute[];
  heading: string;
}

const HomeLayout: React.FC<Props> = ({ routes, heading }) => {
  return (
    <div className="my-4 min-h-screen">
      <h1 className="text-3xl border-b lg:text-5xl text-white font-bold">
        {heading}
      </h1>
      <div className="my-16 gap-x-6 gap-y-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4   max-w-[1700px]">
        {routes.map((route, index) => (
          <Card route={route} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeLayout;
