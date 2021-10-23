import Node from "./Node";

const height = (node: Node<any> | null): number => {
  if (!node) return -1;
  return 1 + Math.max(height(node.left), height(node.right));
};

export default height;
