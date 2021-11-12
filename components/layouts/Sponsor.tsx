import React from "react";
import Image from "next/image";

interface Props {}

const Sponsor: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <p className="xl:text-lg text-gray-200 text-center">
        This Project is Open sourced!!, visit our{" "}
        <a
          className="text-blue-400 underline"
          href="https://github.com/ds-visualizer/ds-visualizer"
        >
          github
        </a>{" "}
        to contribute
      </p>
      <p>
        <a href="https://vercel.com/dashboard?utm_source=ds-visualizer&utm_compaign=os">
          <Image
            width={350}
            height={45}
            src={"/images/powered-by-vercel.svg"}
            alt="Powered by Vercel"
          />
        </a>
      </p>
    </div>
  );
};

export default Sponsor;
