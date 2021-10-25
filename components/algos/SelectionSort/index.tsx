import React, { useEffect, useState } from "react";
import { Value } from "@Root/misc/algo/arrValue";
import { AnimatePresence } from "framer-motion";

let arr: Value[] = [];
const Index = () => {
  let [values, setValues] = useState<JSX.Element[]>([]);
  const [isSorted, setIsSorted] = useState<boolean>(false);

  const createRandomArr = (items: number) => {
    for (let i = 0; i < items; i++) {
      arr.push(new Value(Math.floor(Math.random() * 100)));
    }
    renderList();
  };

  const swap = (arr: Value[], x: number, y: number) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  };

  function waitforme(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const selectionSort = async () => {
    let minimumValue = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      minimumValue = i;
      renderList();
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].value < arr[minimumValue].value) {
          minimumValue = j;
          renderList();
        }
      }
      swap(arr, minimumValue, i);
    }
  };

  const renderList = () => {
    let arr2: JSX.Element[] = [];
    for (let i = 0; i < arr.length; i++) {
      arr2.push(arr[i].render());
    }
    setValues(arr2);
  };

  return (
    <div>
      <button
        onClick={() => {
          createRandomArr(10);
          console.log(arr);
        }}
      >
        Genarate
      </button>
      <button
        className="block"
        onClick={() => {
          selectionSort();
        }}
      >
        Sort
      </button>
      <div className="flex w-full justify-evenly">
        <AnimatePresence>{values}</AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
