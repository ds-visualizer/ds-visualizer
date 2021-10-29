import Node from "./Node";

const insert = async (
  value: number,
  rootObj: { root: Node<number> | null },
  renderTree: () => Promise<void>
) => {
  if (!rootObj.root) {
    rootObj.root = new Node(value);
    await renderTree();
    return;
  }
  let current = rootObj.root;
  while (current) {
    if (value >= current.value) {
      if (!current.right) {
        current.right = new Node(value);
        break;
      } else current = current.right;
    } else {
      if (!current.left) {
        current.left = new Node(value);
        break;
      } else current = current.left;
    }
  }
  await renderTree();
};

export default insert;
