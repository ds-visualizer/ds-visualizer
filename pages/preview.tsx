import React from "react";
import type { NextPage } from "next";
import Metadata from "@Root/components/layouts/Metadata";
import Preview from "@Components/pages/preview";

const preview: NextPage = () => {
  return (
    <>
      <Metadata title="Preview" />
      <Preview />
    </>
  );
};

export default preview;
