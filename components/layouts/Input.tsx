import React from "react";

interface Props {
  content: string;
}

const Input = React.forwardRef<HTMLInputElement | null, Props>(
  ({ content }, ref) => {
    return (
      <div className="flex flex-col items-center">
        <div>{content}</div>
        <input
          ref={ref}
          type="number"
          name=""
          id=""
          className="h-9 w-full rounded outline-none px-2 focus:border-primary border-2"
        />
      </div>
    );
  }
);

export default Input;
