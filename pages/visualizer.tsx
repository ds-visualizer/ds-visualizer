import React from "react";
import type { NextPage } from "next";
import routes from "@Misc/routes";
import Layout from "@Components/layouts/HomeLayout";
import Metadata from "@Root/components/layouts/Metadata";

const visualizer: NextPage = () => {
  const visualizerRoutes = routes.filter((route) => route.type == "Visualizer");
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Metadata title="Visualizer" />
      <Layout heading="Visualizer" routes={visualizerRoutes} />
    </div>
  );
};

export default visualizer;
