import Route from "@Root/interface/Route";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  route: Route;
}

const Card: React.FC<Props> = ({ route: { type, name, path } }) => {
  return (
    <Link href={path}>
      <a>
        <motion.div className="card bg-gray-600 origin-bottom-left px-6 py-6 text-2xl text-gray-200 drop-shadow hover:-rotate-3 transition-all duration-200 transform w-[20rem] rounded h-[13rem] cursor-pointer ">
          <div>{name}</div>
          <div className="text-sm text-gray-300 text-right lg:text-base">
            {type}
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default Card;
