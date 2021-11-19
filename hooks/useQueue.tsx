import { useState } from "react";
import Node from "@Components/algos/queue/Node";

const useQueue = () => {
  const [queue, setQueue] = useState<Array<JSX.Element>>([]);

  const enqueue = (value: number) => {
    const node = new Node(value);
    const newQ = [...queue, node.render()];
    setQueue(newQ);
  };

  const dequeue = () => {
    const newQ = queue.slice(1);
    setQueue(newQ);
  };

  return { methods: { enqueue, dequeue }, queue };
};

export default useQueue;
