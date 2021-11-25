import React from "react";

interface IInput {
  name: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  stateName?: string;
  value?: string;
}

interface Props {
  inputInfo: IInput;
  handleFormState?: (stateName: string, value: string) => void;
}

const InputBox: React.FC<Props> = ({ inputInfo, handleFormState }) => {
  const { name, placeholder, type, stateName, value } = inputInfo;
  return (
    <div className="relative comment my-8 mx-4">
      <input
        id={name}
        autoComplete="off"
        onChange={(e) => {
          if (!stateName) return;
          if (!handleFormState) return;
          handleFormState(stateName, e.target.value);
        }}
        name={name}
        type={type}
        value={value}
        className="peer h-10 w-full font-mono px-2 border-b-2 border-gray-400 text-gray-300 placeholder-transparent focus:outline-none focus:border-rose-600"
        placeholder={placeholder}
      />
      <label
        htmlFor={name}
        className="absolute left-2 top-2 peer-focus:-top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2  peer-focus:text-gray-400 peer-focus:text-sm"
      >
        {name}
      </label>
    </div>
  );
};

export default InputBox;
