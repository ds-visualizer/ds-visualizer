import React, {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  MouseEvent,
  FormEvent,
  MouseEventHandler,
} from "react";
import { Value } from "@Root/misc/algo/arrValue";
import OptionBackground from "@Components/layouts/OptionBackground";
import Input from "@Components/layouts/Input";
import Buttons from "@Components/layouts/Buttons";
import Button from "@Components/layouts/Button";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Root/components/layouts/Content";

interface Props {
  html: mdxHtml[];
}

const Index = ({ html }: Props) => {
  const [values, setValues] = useState<Value[]>([]);
  const [start, setStart] = useState<boolean>(false);
  const [renderArr, setRenderArr] = useState<JSX.Element[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addToArr = (e: FormEvent<HTMLFormElement> | MouseEvent) => {
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

  const selectedEffect = async (
    value: Value | null,
    color: string,
    delay: number
  ) => {
    if (!value) return;
    const valueElement = document.querySelector<HTMLDivElement>(
      `.a${value.key}`
    );
    if (!valueElement) return;
    valueElement.style.transform = "scale(1.3)";
    valueElement.style.backgroundColor = color;
    await addDelay(delay);
    valueElement.style.transform = "scale(1)";
    valueElement.style.backgroundColor = "#9ca3af";
  };

  const removeColor = async (value: Value | null) => {
    if (!value) return;
    const valueElement = document.querySelector<HTMLDivElement>(
      `.a${value.key}`
    );
    if (!valueElement) return;
    valueElement.style.backgroundColor = "#9ca3af";
  };

  const sortArray = async () => {
    let minPos = 0;
    for (let i = 0; i < values.length - 1; i++) {
      minPos = i;
      selectedEffect(values[i], "#be12c9", 1000 * (values.length - i));
      for (let j = i + 1; j < values.length; j++) {
        if (values[j].value < values[minPos].value) {
          minPos = j;
          await selectedEffect(values[minPos], "#12c9bd", 1200);
        }
      }
      swapElements(minPos, i);
      renderArray();
      removeColor(values[minPos]);
    }
    setStart(false);
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
    <div className="w-full flex flex-col  align-center">
      <OptionBackground>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addToArr(e);
            inputRef.current!.value = "";
            inputRef.current?.focus();
          }}
        >
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
                e.preventDefault();
                addToArr(e);
                inputRef.current!.value = "";
                inputRef.current?.focus();
              }}
            ></Button>
          </Buttons>
        </form>
      </OptionBackground>
      <div className="flex justify-center w-full h-full p-6">{renderArr}</div>
      <div>
        <Content html={html[0]} />
      </div>
    </div>
  );
};

export default Index;
