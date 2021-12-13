import Link from "next/link";
import React, { useState } from "react";
import useGlobalContext from "@Root/hooks/useGlobalContext";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  signIn: () => void;
  signOut: () => void;
}

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
const NavBar: React.FC<Props> = ({ signOut, signIn }) => {
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
        {!user ? (
          <button
            className="text-gray-300 hover:text-gray-100 transition-colors"
            onClick={signIn}
          >
            Sign In
          </button>
        ) : (
          <div className="flex justify-center items-center space-x-4">
            {user.user_metadata && (
              <Image
                className=" rounded-xl"
                src={`https://github.com/${user.user_metadata.user_name}.png`}
                width="25"
                height="25"
              />
            )}
            <button
              className="text-gray-300 hover:text-gray-100 transition-colors"
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
