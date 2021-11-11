import React from "react";
import Image from "next/image";

interface Props {}

const Sponsor: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <p className="xl:text-xl text-white text-center">
        This Project is Open sourced!!, visit our{" "}
        <a
          className="text-blue-400 underline"
          href="https://github.com/satvik-1203/ds-visualizer"
        >
          github
        </a>{" "}
        to contribute
      </p>
      <p>
        <a href="https://vercel.com/dashboard?utm_source=ds-visualizer&utm_compaign=os">
          <Image width={500} height={50} src={"/images/vercel.svg"} />
        </a>
      </p>
    </div>
  );
};

export default Sponsor;
