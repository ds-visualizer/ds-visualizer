import Route from "@Root/interface/Route";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  route: Route;
}

const Card: React.FC<Props> = ({ route }) => {
  const { type, name, path } = route;
  return (
    <Link href={type == "Visualizer" ? path : "/algorithms" + path}>
      <a>
        <motion.div className="card bg-gray-600 origin-bottom-left px-6 py-6 text-2xl text-white drop-shadow hover:-rotate-3 transition-all duration-200 transform w-[20rem] rounded h-[13rem] cursor-pointer ">
          <div>{name}</div>
          <div>
            <div className="text-sm text-gray-300 text-right lg:text-base">
              {type}
            </div>
            {type == "Algorithm" && (
              <div className="text-xs text-gray-300 text-right lg:text-sm">
                {route.category}
              </div>
            )}
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default Card;
