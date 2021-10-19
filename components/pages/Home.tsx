import React from "react";
import routes from "@Misc/routes";
import Link from "next/link";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="">
      {routes.map(({ name, path }) => (
        <div className="text-purple-500 underline">
          <Link href={path}>
            <a>{name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
