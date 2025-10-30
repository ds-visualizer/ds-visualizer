import Link from "next/link";
import React, { useState } from "react";
import useGlobalContext from "@Root/hooks/useGlobalContext";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {}

interface LinkProps {
  name: string;
  path: string;
}

const NavLink: React.FC<LinkProps> = ({ path, name }) => {
  const router = useRouter();
  return (
    <Link href={path}>
      <a
        className={`${
          router.pathname == path ? "text-white" : "text-gray-300"
        } hover:text-gray-200 transition-colors`}
      >
        <span>{name}</span>
      </a>
    </Link>
  );
};
const NavBar: React.FC<Props> = () => {
  const { state } = useGlobalContext();
  const { user } = state;

  return (
    <div className=" sticky top-0 z-40  backdrop-blur-[3px]">
      <div className=" border-b flex justify-between  py-3 px-6 mx-8 border-gray-600">
        <div className="flex space-x-3">
          <NavLink path="/" name="Home" />
          <NavLink path="/visualizer" name="Visualizer" />
          <NavLink path="/algorithms" name="Algorithms" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
