import React, { forwardRef } from "react";

interface Props {
  setMdxContent: React.Dispatch<React.SetStateAction<string>>;
}

const MdxComponent = forwardRef<HTMLTextAreaElement, Props>(
  ({ setMdxContent }, ref) => {
    return (
      <div className="">
        <textarea
          onChange={(e) => {
            setMdxContent(e.target.value);
          }}
          ref={ref}
          className={`w-[47vw] lg:text-lg text-gray-200 px-4 py-3 outline-none bg-gray-800  h-screen resize-none`}
        ></textarea>
      </div>
    );
  }
);

export default MdxComponent;
