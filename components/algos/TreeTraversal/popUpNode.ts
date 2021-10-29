import Node from "@Components/algos/BinaryTree/Node";
import timeOut from "@Root/misc/timeOut";

const popUp = async (node: Node<any> | null) => {
  if (!node) return;
  const nodeElement = document.querySelector<HTMLDivElement>(`#n${node.id}`)!;
  const nodeElementNode = nodeElement.querySelector<HTMLDivElement>(".node")!;
  nodeElementNode.style.transform = "scale(1.3)";
  await timeOut(1000);
  nodeElementNode.style.transform = "scale(1)";
};

export default popUp;
