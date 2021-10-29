import React from "react";

interface Props {
  content: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement | null, Props>(
  ({ content, type, onChange, placeholder }, ref) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-full">{content}</div>
        <input
          onChange={onChange}
          ref={ref}
          type={type || "number"}
          name=""
          id=""
          placeholder={placeholder}
          className="h-9 w-full border-gray-800  rounded outline-none border-[1px] px-2 focus:border-primary "
        />
      </div>
    );
  }
);

export default Input;
