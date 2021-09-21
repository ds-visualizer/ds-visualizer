import React, { useRef } from "react";

interface Props {
  addFirst: (value: number) => void;
  addLast: (value: number) => void;
  removeFirst: () => void;
  removeLast: () => void;
}

const Options: React.FC<Props> = ({
  removeLast,
  removeFirst,
  addFirst,
  addLast,
}) => {
  let inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="flex space-x-3">
        <button
          onClick={() => {
            if (!inputRef.current) return;
            let value = +inputRef.current.value;
            inputRef.current.value = "";
            addLast(value);
          }}
        >
          Add Last
        </button>
        <button
          onClick={() => {
            if (!inputRef.current) return;
            let value = +inputRef.current.value;
            inputRef.current.value = "";
            addFirst(value);
          }}
        >
          Add first
        </button>
        <button onClick={removeFirst}>Remove First</button>
        <button onClick={removeLast}>Remove Last</button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputRef.current) return;
          let value = +inputRef.current.value;
          inputRef.current.value = "";
          addLast(value);
        }}
      >
        <input
          ref={inputRef}
          type="number"
          className="w-20 h-5 border-green-500 border-2 block"
        />
      </form>
    </>
  );
};

export default Options;
