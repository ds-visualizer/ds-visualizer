import React from "react";

interface Props {
  content: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

const Input = React.forwardRef<HTMLInputElement | null, Props>(
  ({ content, type, onChange }, ref) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-full">{content}</div>
        <input
          onChange={onChange}
          ref={ref}
          type={type || "number"}
          name=""
          id=""
          className="h-9 w-full bg-gray-500 rounded outline-none border-0 px-2 focus:border-primary "
        />
      </div>
    );
  }
);

export default Input;
