import fs from "fs";
import serialize from "@Misc/serialize";

const htmlData = async (path: string) => {
  const mdxData = fs.readFileSync(path, "utf8");
  const htmlData = await serialize(mdxData);

  return htmlData;
};

export default htmlData;
