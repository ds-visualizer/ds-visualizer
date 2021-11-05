import Node from "@Components/algos/Stack/Node";
import { useState, useRef, useEffect } from "react";

const useStack = () => {
  const [stack, setStack] = useState<Array<JSX.Element>>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const [emptyStack, setEmptyStack] = useState<boolean>(false);

  useEffect(() => {
    if (emptyStack == false) return;

    if (stack.length == 0) return setEmptyStack(false);

    pop();
  }, [emptyStack, stack]);

  const push = (value: number) => {
    const node = new Node(value);
    setStack((prev) => [...prev, node.render(stack.length)]);
  };

  const pop = () => {
    const nodes = stack.slice(0, -1);
    setStack(() => nodes);
  };

  const empty = () => {
    setEmptyStack(true);
  };
  return { stack, methods: { push, pop, empty }, refs: { inputRef } };
};

export default useStack;
