import React, { forwardRef } from "react";
import client from "@Root/supabase.config";

const url = process.env["NEXT_PUBLIC_supabase_URL"];

interface Props {
  setMdxContent: React.Dispatch<React.SetStateAction<string>>;
  mdxContent: string;
}

// Going to leave it as forwarded ref for a while, strong feeling that I might need to later

const MdxComponent = forwardRef<boolean, Props>(
  ({ setMdxContent, mdxContent }, saveRef) => {
    const onDragEnter = async (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const item = e.dataTransfer.items[0];
      if (item.kind == "file") {
        if (!item.type.match(/image\/\D+/gm)) return;
        const file = item.getAsFile()!;

        try {
          const date = Date.now().toString();
          const { data, error } = await client.storage
            .from("images")
            .upload(`${date}`, file, {
              cacheControl: "max-age=31536000",
            });

          if (!data) throw error;

          setMdxContent(
            mdxContent +
              ` ![alt text](${url}/storage/v1/object/public/${data.Key})`
          );
        } catch (e) {
          console.log(e);
        }
      }
    };

    return (
      <div className="h-full" onDrop={onDragEnter}>
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
