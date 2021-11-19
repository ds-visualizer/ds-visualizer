import Link from "next/link";
import React from "react";

interface Props {
  singIn: () => void;
}

const NavBar: React.FC<Props> = ({ singIn }) => {
  return (
    <div className=" sticky top-0 z-40  backdrop-blur-[3px]">
      <div className=" border-b flex justify-between  py-3 px-6 mx-8 border-gray-600">
        <Link href="/">
          <a className="text-white">Home</a>
        </Link>
        <button
          className="text-gray-300 hover:text-gray-100 transition-colors"
          onClick={singIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;
