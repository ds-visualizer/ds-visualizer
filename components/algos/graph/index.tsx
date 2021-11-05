import React, { useRef, useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import OptionBackground from "@Components/layouts/OptionBackground";
import Buttons from "@Root/components/layouts/Buttons";
import Input from "@Root/components/layouts/Input";
import Button from "@Root/components/layouts/Button";

import Node from "./Node";
import render from "./render";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Root/components/layouts/Content";
import useAdjList from "@Components/hooks/useAdjList";

interface Props {
  html: mdxHtml[];
}

export interface IGraph {
  [vertex: string]: Array<Node<string>>;
}

const index: React.FC<Props> = ({ html }) => {
  const { refs, methods, graph } = useAdjList();

  const { fromRef, labelRef, toRef } = refs;
  const { addEdge, addVertex, removeEdge, removeVertex } = methods;

  return (
    <div>
      <OptionBackground className="flex-row space-x-7">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!labelRef.current!.value) return;

            addVertex(labelRef.current!.value);
          }}
        >
          <Input
            type="text"
            ref={labelRef}
            content="Enter the vertex to add: "
          />
          <Buttons>
            <Button type="submit" content="Add Vertex" />
            <Button
              onClick={() => {
                removeVertex(labelRef.current!.value);
              }}
              content="Remove Vertex"
            />
          </Buttons>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addEdge(fromRef.current!.value, toRef.current!.value);
          }}
        >
          <div>
            <Input ref={fromRef} type="text" content="From" />
            <Input ref={toRef} type="text" content="To" />
          </div>
          <Buttons>
            <Button type="submit" content="Add Edge" />
            <Button
              onClick={() => {
                removeEdge(fromRef.current!.value, toRef.current!.value);
              }}
              type="submit"
              content="Remove Edge"
            />
          </Buttons>
        </form>
      </OptionBackground>
      <div className="my-5 w-screen py-16 overflow-y-hidden overflow-x-scroll min-h-[40vh] flex flex-col items-start px-14">
        <AnimateSharedLayout>
          <AnimatePresence>{render(graph)}</AnimatePresence>
        </AnimateSharedLayout>
      </div>
      <div>
        <Content html={html[0]} />
      </div>
    </div>
  );
};

export default index;
