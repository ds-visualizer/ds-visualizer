import { IGraph } from ".";
import { motion } from "framer-motion";

const render = (graph: IGraph): Array<JSX.Element> => {
  const verticesEdges: Array<JSX.Element> = [];

  for (const key in graph) {
    const list = (
      <motion.div
        layout
        key={key}
        className="flex my-3 space-x-6 justify-center items-center"
      >
        <motion.div
          layout
          className="bg-secondary  text-white w-14 h-14 flex justify-center items-center rounded"
        >
          {key}
        </motion.div>
        <motion.div layout className="bg-gray-100 w-1 h-14"></motion.div>
        <motion.div layout className="flex space-x-3">
          {graph[key].map((node) => node.render())}
        </motion.div>
      </motion.div>
    );

    verticesEdges.push(list);
  }
  return verticesEdges;
};

export default render;
