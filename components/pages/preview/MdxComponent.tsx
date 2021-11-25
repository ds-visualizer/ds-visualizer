import React, { forwardRef } from "react";

interface Props {
  setMdxContent: React.Dispatch<React.SetStateAction<string>>;
  mdxContent: string;
}

// Going to leave it as forwarded ref for a while, strong feeling that I might need to later

const MdxComponent = forwardRef<boolean, Props>(
  ({ setMdxContent, mdxContent }, saveRef) => {
    return (
      <div className="h-full">
        <textarea
          onChange={(e) => {
            setMdxContent(e.target.value);

            localStorage.setItem("currentFile", e.target.value);
          }}
          value={mdxContent}
          className={`lg:text-lg w-full h-full text-gray-200 px-4 py-3 outline-none bg-gray-800   resize-none`}
        ></textarea>
      </div>
    );
  }
);

export default MdxComponent;
