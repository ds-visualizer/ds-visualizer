import React, { forwardRef } from "react";

interface Props {
  setMdxContent: React.Dispatch<React.SetStateAction<string>>;
  mdxContent: string;
}

const MdxComponent: React.FC<Props> = ({ setMdxContent, mdxContent }) => {
  return (
    <div className="h-full">
      <textarea
        onChange={(e) => {
          setMdxContent(e.target.value);
        }}
        value={mdxContent}
        className={`lg:text-lg w-full h-full text-gray-200 px-4 py-3 outline-none bg-gray-800   resize-none`}
      ></textarea>
    </div>
  );
};

export default MdxComponent;
