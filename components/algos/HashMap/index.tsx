import React, { useRef } from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Components/layouts/Content";
import useHashMap from "@Components/hooks/useHashMap";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import OptionBackground from "@Components/layouts/OptionBackground";
import Buttons from "@Components/layouts/Buttons";
import Button from "@Components/layouts/Button";
import Input from "@Components/layouts/Input";

interface Props {
  html: mdxHtml[];
}

const index: React.FC<Props> = ({ html }) => {
  const { htmlMap, put, remove } = useHashMap();
  const keyRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);

  return (
    <div className="">
      <OptionBackground>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            put(keyRef.current!.value, valueRef.current!.value);
            keyRef.current!.value = "";
            valueRef.current!.value = "";
          }}
        >
          <div className="flex space-x-3">
            <Input ref={keyRef} type="text" content="Enter Your Key" />
            <Input ref={valueRef} type="text" content="Enter Your Value" />
          </div>
          <Buttons>
            <Button type="submit" content="Put" />
            <Button
              onClick={() => {
                remove(keyRef.current!.value);
                keyRef.current!.value = "";
              }}
              content="Remove"
            />
          </Buttons>
        </form>
      </OptionBackground>
      <div className="flex justify-center my-7 h-[40vh] overflow-hidden px-5">
        <AnimateSharedLayout>{htmlMap}</AnimateSharedLayout>
      </div>
      <Content html={html[0]} />
    </div>
  );
};

export default index;
