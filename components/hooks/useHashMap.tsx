import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

export class Node {
  static ID = 0;
  id: number;
  constructor(public key: string, public value: string) {
    this.id = Node.ID++;
  }

  render() {
    return (
      <motion.div
        transition={{
          type: "spring",
          // damping: 20,
          // stiffness: 100,
          duration: 0.7,
          bounce: 0.1,
        }}
        initial={{ scale: 0.5 }}
        animate={{
          scale: 1,
        }}
        exit={{ scale: 0, transition: { duration: 0.2 } }}
        layout
        key={this.id}
        className="w-14  rounded  flex flex-col text-sm justify-center items-center h-14 bg-gray-400 overflow-hidden"
      >
        <div className="key">K: {this.key}</div>
        <div className="value">V: {this.value}</div>
      </motion.div>
    );
  }
}

const hash = (str: string) => {
  return str.length % 10;
};

const useHashMap = () => {
  const [map, setMap] = useState<Array<Array<Node>>>(new Array(10).fill([]));
  const [htmlMap, setHtmlMap] = useState<JSX.Element>();

  useEffect(() => {
    setHtmlMap(renderMap());
  }, [map]);

  const put = (key: string, value: string) => {
    const index = hash(key);
    const newMap = [...map];

    if (newMap[index].find((node) => node.key === key)) return;

    newMap[index] = [new Node(key, value), ...map[index]];
    setMap(newMap);
  };

  const remove = (key: string) => {
    const index = hash(key);
    const newMap = [...map];
    newMap[index] = map[index].filter((node) => node.key !== key);
    setMap(newMap);
  };

  const renderMap = () => {
    return (
      <motion.div layout className="flex space-x-4 text-lg text-gray-600">
        {map.map((row, index) => {
          return (
            <motion.div key={index} className="flex flex-col">
              <div className="w-14  rounded  flex justify-center items-center h-14 bg-purple-400">
                {index}
              </div>
              <motion.div
                layout
                className="flex flex-col space-y-4 my-2"
                key={index}
              >
                <AnimatePresence>
                  {row.map((node) => {
                    return node.render();
                  })}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  return { put, remove, htmlMap };
};

export default useHashMap;
