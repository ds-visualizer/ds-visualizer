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
        <div className="bg-gray-600 origin-top-left px-3 py-3 text-primary drop-shadow hover:-rotate-3 transition-all duration-200 transform w-[15rem] rounded h-[7rem] cursor-pointer ">
          {name}
        </div>
      </a>
    </Link>
  );
};

export default Card;
