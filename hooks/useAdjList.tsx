import { useState, useRef } from "react";
import { IGraph } from "@Components/algos/graph";
import Node from "@Components/algos/graph/Node";

const useAdjList = () => {
  const [graph, setGraph] = useState<IGraph>({});

  const labelRef = useRef<HTMLInputElement>(null);
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  const addVertex = (label: string) => {
    setGraph({ ...graph, [label]: [] });
    labelRef.current!.value = "";
  };

  const addEdge = (from: string, to: string) => {
    if (from == to) return;

    if (!graph[from] || !graph[to]) return;
    if (graph[from].find((node) => node.value == to)) return;

    setGraph({ ...graph, [from]: [...graph[from], new Node(to)] });
    fromRef.current!.value = "";
    toRef.current!.value = "";
  };

  const removeEdge = (from: string, to: string) => {
    if (from == to) return;
    if (!graph[from] || !graph[to]) return;

    const nodeIndex = graph[from].findIndex((node) => node.value == to);

    if (nodeIndex == -1) return;

    graph[from].splice(nodeIndex, 1);
    setGraph({ ...graph, [from]: [...graph[from]] });
    fromRef.current!.value = "";
    toRef.current!.value = "";
  };

  const removeVertex = (label: string) => {
    if (!graph[label]) return;

    const newGraph = { ...graph };
    delete newGraph[label];

    for (const key in newGraph) {
      const nodeIndex = newGraph[key].findIndex((node) => node.value == label);
      if (nodeIndex != -1) newGraph[key].splice(nodeIndex, 1);
    }

    setGraph(newGraph);
    labelRef.current!.value = "";
  };

  return {
    graph,
    refs: {
      toRef,
      fromRef,
      labelRef,
    },
    methods: { addEdge, addVertex, removeEdge, removeVertex },
  };
};

export default useAdjList;
