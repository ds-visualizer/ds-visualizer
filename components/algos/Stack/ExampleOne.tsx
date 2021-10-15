import React, { useState } from "react";
import OptionBackground from "@Components/layouts/OptionBackground";
import Input from "@Root/components/layouts/Input";
import Buttons from "@Root/components/layouts/Buttons";
import Button from "@Root/components/layouts/Button";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Node from "./Node";

interface Props {}

const brackets = ["(", "<", "{", "[", ")", ">", "}", "]"];
const openBrackets = ["(", "<", "{", "["];
const closeBrackets = [")", ">", "}", "]"];

const bracketPair: { [bracket: string]: string } = {
  ")": "(",
  ">": "<",
  "}": "{",
  "]": "[",
};

const tempStack: string[] = []; // Change it to state from global, not good code

const ExampleOne: React.FC<Props> = () => {
  const [bracketStr, setBracketStr] = useState("");
  const [str, setStr] = useState("");
  const [popup, setPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [stack, setStack] = useState<Array<JSX.Element>>([]);

  const next = () => {
    if (str == "") {
      if (stack.length == 0) {
        setPopup(true);
        setPopupMsg("Its a balanced parenthesis");
        setTimeout(() => {
          setPopup(false);
          setPopupMsg("");
          tempStack.length = 0;
          setBracketStr("");
          setStr("");
          setStack([]);
        }, 5000);
        return;
      }
      setPopup(true);
      setPopupMsg(
        "Its not a balanced parenthesis since the stack isn't empty even after the string is"
      );
      setTimeout(() => {
        setPopup(false);
        setPopupMsg("");
        tempStack.length = 0;
        setBracketStr("");
        setStr("");
        setStack([]);
      }, 5000);
      return;
    }
    const bracket = str[0];
    const openBracket = openBrackets.find((br) => br == bracket);
    if (openBracket) {
      const node = new Node(openBracket);
      tempStack.push(bracket);
      setStack((prev) => [...prev, node.render()]);
      setStr((prev) => prev.slice(1));
    }
    const closeBracket = closeBrackets.find((br) => br == bracket);
    if (closeBracket) {
      const openBracket = bracketPair[bracket];
      const topBracket = tempStack[tempStack.length - 1];
      if (topBracket != openBracket) {
        setPopupMsg(
          `Since the close bracket ${closeBracket} is not corresponding to the top bracket ${topBracket} in the stack and hence its not a balanced parenthesis. `
        );
        setPopup(true);
        setTimeout(() => {
          setPopup(false);
          setPopupMsg("");
          tempStack.length = 0;
          setBracketStr("");
          setStr("");
          setStack([]);
        }, 5000);
        return; // false logic
      }
      tempStack.pop();
      const temp = stack.slice(0, -1);
      setStr((prev) => prev.slice(1));
      setStack(temp);
    }
  };

  return (
    <>
      <OptionBackground>
        <Input
          type="text"
          value={bracketStr}
          onChange={(e) => {
            const str = e.target.value;
            if (str == "") return setBracketStr("");
            const bracket = str.charAt(str.length - 1);
            const exit = brackets.find((el) => el == bracket);
            if (!exit) return;
            setBracketStr(str);
          }}
          content="Enter your bracket: "
        />
        <Buttons>
          <Button
            onClick={() => {
              setStack([]);
              setPopup(false);
              setPopupMsg("");
              setStr(bracketStr);
              setBracketStr("");
            }}
            content="Start"
          />
          <Button onClick={next} content="Next Step" />
        </Buttons>
      </OptionBackground>
      <div className="flex relative justify-center">
        <motion.div layout>
          <div className="w-[18rem]">
            <div className="text-3xl text-white text-center">
              Bracket String: <span>{str}</span>
            </div>
          </div>
          <div>
            <div className="h-[50vh] flex relative overflow-y-auto">
              <motion.div
                className={`flex  flex-col-reverse items-center mt-10 px-3 py-3 border-2 transition-all border-purple-500 border-t-0 min-h-[0.8rem] w-28 mx-auto `}
              >
                <AnimateSharedLayout>
                  <AnimatePresence>{stack}</AnimatePresence>
                </AnimateSharedLayout>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {popup && (
          <div className=" shadow bg-gray-700 text-primary -translate-x-1/3 px-3 py-3 rounded absolute left-2/3  top-1/2">
            {popupMsg}
          </div>
        )}
      </div>
    </>
  );
};

export default ExampleOne;
