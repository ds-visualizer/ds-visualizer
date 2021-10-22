import Node from "./Node";
import distance from "./distance";

const graphFunction = (node: Node<number> | null) => {
  if (!node) return;
  if (!node.left && !node.right) return;

  const parent = document.querySelector(`#n${node.id}`);
  const parentAxis = parent!.getBoundingClientRect();

  const childBox = document.querySelector(`#c${node.id}`);

  const childBoxCord = childBox!.getBoundingClientRect();
  if (!childBox || !childBoxCord?.width) return;

  const rightNodeID = node?.right ? `#n${node!.right!.id}` : ".null";
  const rightNode = childBox.querySelector(rightNodeID);
  const leftNodeID = node?.left ? `#n${node!.left!.id}` : ".null";
  const leftNode = childBox.querySelector(leftNodeID);

  const rightNodeAxis = rightNode?.getBoundingClientRect();
  const leftNodeAxis = leftNode?.getBoundingClientRect();

  if (!leftNode || !rightNode) return;

  const xMidPoint = (leftNodeAxis!.x + rightNodeAxis!.x) / 2;

  const perpendicularD = distance(
    [xMidPoint, rightNodeAxis!.y],
    [parentAxis.x, parentAxis.y]
  );

  const hypo = distance(
    [parentAxis.x, parentAxis.y],
    [rightNodeAxis!.x, rightNodeAxis!.y]
  );

  const deg = Math.acos(perpendicularD / hypo) * 45;

  return { deg, hypo };
};

export default graphFunction;
