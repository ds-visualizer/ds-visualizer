import React from "react";
import { useRouter } from "next/router";
import Feedback from "./Feedback";

interface Props {}

const Footer: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <footer className="max-w-[1000px]  mx-auto ">
      <Feedback />
      <div className="py-14 px-4 grid md:grid-cols-2 gap-x-32 gap-y-7 ">
        <div className="px-4 py-6 text-primary bg-purple-800 bg-gradient-to-r rounded from-purple-900">
          <p>Thanks for reading it till the end.</p>
          <p>
            If any typo or bug found let me know by putting up an issue in{" "}
            <a
              className="text-blue-400 underline"
              target="_blank"
              href="https://github.com/ds-visualizer/ds-visualizer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="px-4 py-6 text-primary bg-purple-800 bg-gradient-to-r rounded from-purple-900">
          <p>
            The code can be found{" "}
            <a
              className="text-blue-400 underline"
              href={`https://github.com/ds-visualizer/Java-Codes/tree/main${router.pathname}`}
              target="_blank"
            >
              Here
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
