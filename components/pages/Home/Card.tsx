import Route from "@Root/interface/Route";
import Link from "next/link";
import React from "react";

interface Props {
  route: Route;
}

const Card: React.FC<Props> = ({ route: { name, path } }) => {
  return (
    <Link href={path}>
      <a>
        <div className="card bg-gray-600 origin-top-left px-6 py-6 text-2xl text-primary drop-shadow hover:-rotate-3 transition-all duration-200 transform w-[17rem] rounded h-[9rem] cursor-pointer ">
          {name}
        </div>
      </a>
    </Link>
  );
};

export default Card;
