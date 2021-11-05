import React, { useEffect, useRef, useState } from "react";
import { Value } from "@Root/misc/algo/arrValue";
import OptionBackground from "@Components/layouts/OptionBackground";
import Input from "@Components/layouts/Input";
import Buttons from "@Components/layouts/Buttons";
import Button from "@Components/layouts/Button";

const Index = () => {
  const [values, setValues] = useState<Value[]>([]);
  const [start, setStart] = useState<boolean>(false);
  const [renderArr, setRenderArr] = useState<JSX.Element[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateArr = (items: number = 5) => {
    setValues([]);
    let cp = [];
    for (let i = 0; i < items; i++) {
      cp.push(new Value(Math.floor(Math.random() * 100)));
    }
    setValues(cp);
  };

  const addToArr = (e: MouseEvent) => {
    e.preventDefault();
    const value = parseInt(inputRef.current?.value || "0");

    let copy = [...values];
    copy.push(new Value(value));
    setValues(copy);
    let x: JSX.Element[] = [];
    copy.forEach((e) => x.push(e.render()));
    setRenderArr(x);
  };

  function addDelay(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const swapElements = (x: number, y: number) => {
    let temp = values[x];
    values[x] = values[y];
    values[y] = temp;
    setValues(values);
  };

  const sortArray = async () => {
    let minPos = 0;
    for (let i = 0; i < values.length - 1; i++) {
      minPos = i;
      for (let j = i + 1; j < values.length; j++) {
        if (values[j].value < values[minPos].value) {
          minPos = j;
        }
      }
      swapElements(minPos, i);
      renderArray();
      await addDelay(1000);
    }
    setStart(false);
    alert("Sort Completed");
  };

  const renderArray = () => {
    let copyArr: JSX.Element[] = [];
    for (let i = 0; i < values.length; i++) {
      copyArr.push(values[i].render());
    }
    setRenderArr(copyArr);
  };

  useEffect(() => {
    if (start === true) {
      sortArray();
    }
  }, [start]);

  return (
    <div className="w-full h-[100vh] flex flex-col  align-center">
      <OptionBackground>
        <form>
          <Input ref={inputRef} content="Element to add into the array: " />
          <Buttons>
            <Button
              content="Sort"
              onClick={async () => {
                setStart(true);
              }}
            ></Button>
            <Button
              content="Insert"
              onClick={(e) => {
                addToArr(e);
              }}
            ></Button>
          </Buttons>
        </form>
      </OptionBackground>
      <div className="flex justify-center w-full h-full p-6">{renderArr}</div>
    </div>
  );
};

export default Index;
