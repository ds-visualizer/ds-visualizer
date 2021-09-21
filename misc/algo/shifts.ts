export const shiftLeft = () => {
  const nodes = document.querySelector<HTMLDivElement>("#nodes");
  if (!nodes) return;
  nodes.style.transform = "translateX(48px)";
};

export const shiftBack = () => {
  const nodes = document.querySelector<HTMLDivElement>("#nodes");
  if (!nodes) return;
  nodes.style.transform = "translateX(0)";
};
