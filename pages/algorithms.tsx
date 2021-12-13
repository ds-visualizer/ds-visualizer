import React from "react";
import type { NextPage } from "next";
import routes from "@Misc/routes";
import Layout from "@Components/layouts/HomeLayout";
import Metadata from "@Root/components/layouts/Metadata";

const algorithm: NextPage = () => {
  const visualizerRoutes = routes.filter((route) => route.type == "Algorithm");
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Metadata title="Algorithm" />
      <Layout heading="Algorithm" routes={visualizerRoutes} />
    </div>
  );
};

export default algorithm;
