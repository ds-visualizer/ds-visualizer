import React, { forwardRef } from "react";

const url = process.env["NEXT_PUBLIC_supabase_URL"];

interface Props {
  setMdxContent: React.Dispatch<React.SetStateAction<string>>;
  mdxContent: string;
}

// Going to leave it as forwarded ref for a while, strong feeling that I might need to later

const MdxComponent = forwardRef<boolean, Props>(
  ({ setMdxContent, mdxContent }, saveRef) => {
    const onDrop = async (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const item = e.dataTransfer.items[0];
      if (item.kind == "file") {
        if (!item.type.match(/image\/\D+/gm)) return;
        const file = item.getAsFile()!;

        try {
          setMdxContent(mdxContent + ` ![alt text](${url})`);
        } catch (e) {
          console.log(e);
        }
      }
    };

    return (
      <div className="h-full" onDrop={onDrop}>
        <textarea
          onChange={(e) => {
            setMdxContent(e.target.value);
          }}
          value={mdxContent}
          className={`lg:text-lg w-full h-full text-gray-200 px-4 py-3 outline-none bg-gray-800   resize-none`}
        ></textarea>
      </div>
    );
  }
);

export default MdxComponent;
