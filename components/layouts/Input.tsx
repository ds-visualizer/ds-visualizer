import React from "react";

interface Props {
  content: string;
<<<<<<< HEAD
}

const Input = React.forwardRef<HTMLInputElement | null, Props>(
  ({ content }, ref) => {
=======
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

const Input = React.forwardRef<HTMLInputElement | null, Props>(
  ({ content, type, onChange, value }, ref) => {
>>>>>>> 314da669bc445dc844f921c1e827f8542b22b19c
    return (
      <div className="flex flex-col items-center">
        <div>{content}</div>
        <input
<<<<<<< HEAD
          ref={ref}
          type="number"
=======
          onChange={onChange}
          ref={ref}
          type={type || "number"}
>>>>>>> 314da669bc445dc844f921c1e827f8542b22b19c
          name=""
          id=""
          className="h-9 w-full rounded outline-none px-2 focus:border-primary border-2"
        />
      </div>
    );
  }
);

export default Input;
