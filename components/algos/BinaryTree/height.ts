import Node from "./Node";

const height = (node: { root: Node<any> | null }): number => {
  const { root } = node;
  if (!root) return -1;
  return (
    1 + Math.max(height({ root: root.left }), height({ root: root.right }))
  );
};

export default height;
