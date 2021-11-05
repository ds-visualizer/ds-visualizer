import react from "react";
import graphFunction from "./graphFunction";
import Node from "./Node";
import NullNode from "./NullNode";

const render = (
  rootObj: {
    root: Node<number> | null;
  },
  rootHeight: number,
  currentHeight: number,
  parent: Node<number> | null
): JSX.Element => {
  if (currentHeight > rootHeight) {
    return <></>;
  }

  const { root } = rootObj;

  if (!root)
    return (
      <>
        <div className="flex  space-y-8 flex-col items-center">
          <div className={`nu${parent?.id || 0}`}>
            {new NullNode().render()}
          </div>
          <div className={`flex space-x-10`}>
            {render({ root: null }, rootHeight, currentHeight + 1, null)}
            {render({ root: null }, rootHeight, currentHeight + 1, null)}
          </div>
        </div>
      </>
    );

  const data = graphFunction(root);

  return (
    <>
      <div className="flex space-y-8 flex-col items-center">
        <div id={`n${root.id}`}>{root.render(data)}</div>
        <div id={`c${root.id}`} className={`flex space-x-10`}>
          {render({ root: root.left }, rootHeight, currentHeight + 1, root)}
          {render({ root: root.right }, rootHeight, currentHeight + 1, root)}
        </div>
      </div>
    </>
  );
};

export default render;
