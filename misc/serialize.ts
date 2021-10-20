import { serialize as convert } from "next-mdx-remote/serialize";
// @ts-ignore
import remarkCodeTitle from "remark-code-titles";

const serialize = async (code: string) => {
  const html = await convert(code, {
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle],
    },
  });
  return html;
};

export default serialize;
