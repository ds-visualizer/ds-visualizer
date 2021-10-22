import React from "react";
import type { NextPage } from "next";
import BinaryTree from "@Components/algos/BinaryTree";
import Head from "next/head";

const binarytree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Binary Tree</title>
      </Head>
      <BinaryTree />
    </>
  );
};

export default binarytree;
