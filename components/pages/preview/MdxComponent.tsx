import React, { forwardRef } from "react";

interface Props {
  setMdxContent: React.Dispatch<React.SetStateAction<string>>;
  mdxContent: string;
}

const MdxComponent = forwardRef<HTMLTextAreaElement, Props>(
  ({ setMdxContent, mdxContent }, ref) => {
    return (
      <div className="h-full">
        <textarea
          onChange={(e) => {
            setMdxContent(e.target.value);
          }}
          value={mdxContent}
          ref={ref}
          className={`lg:text-lg w-full h-full text-gray-200 px-4 py-3 outline-none bg-gray-800   resize-none`}
        ></textarea>
      </div>
    );
  }
);

export default MdxComponent;
