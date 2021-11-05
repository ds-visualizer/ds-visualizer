import type { NextPage } from "next";
import BubbleSort from "@Components/algos/BubbleSort";
import Metadata from "@Root/components/layouts/Metadata";
import React from "react";

const bubbleSort: NextPage = () => {
  return (
    <>
      <Metadata title="Bubble Sort" />

      <BubbleSort />
    </>
  );
};

export default bubbleSort;
