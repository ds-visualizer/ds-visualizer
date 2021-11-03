import React from "react";
import { useRouter } from "next/router";

interface Props {}

const Footer: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <footer className="py-14 px-4  xl:max-w-[1100px] 3xl:max-w-[1500px] mx-auto grid md:grid-cols-2 gap-x-32 gap-y-7 ">
      <div className="px-4 py-6 text-primary h-[10rem] bg-purple-800 overflow-scroll  rounded">
        <p>Thanks for reading it till the end.</p>
        <p>
          If any typo or bug found, feel free to contribute by fixing the typo
          or putting up an issue in{" "}
          <a
            className="text-blue-400 underline"
            target="_blank"
            href="https://github.com/satvik-1203/ds-visualizer"
          >
            GitHub
          </a>
        </p>
      </div>
      <div className="px-4 py-6 text-primary h-[10rem] bg-purple-800 overflow-scroll  rounded">
        <p>
          All the codes can be found here{" "}
          <a
            className="text-blue-400 underline"
            href={`https://github.com/ds-visualizer/Java-Codes/tree/main${router.pathname}`}
            target="_blank"
          >
            Here
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
