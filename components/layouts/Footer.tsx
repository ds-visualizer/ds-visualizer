import React from "react";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="py-14 px-4  xl:max-w-[1100px] 3xl:max-w-[1500px] mx-auto ">
      <div className="px-3 py-4 text-primary h-[10rem] bg-purple-800 max-w-[30rem] rounded">
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
    </footer>
  );
};

export default Footer;
