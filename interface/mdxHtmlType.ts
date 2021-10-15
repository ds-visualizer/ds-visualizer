import { MDXRemoteSerializeResult } from "next-mdx-remote";

type html = MDXRemoteSerializeResult<Record<string, unknown>>;

export default html;
