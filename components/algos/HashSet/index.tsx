import React, { useRef } from "react";
import mdxHtml from "@Root/interface/mdxHtmlType";
import Content from "@Root/components/layouts/Content";
import useHashMap from "@Root/components/hooks/useHashMap";
import Button from "@Root/components/layouts/Button";
import Buttons from "@Root/components/layouts/Buttons";
import Input from "@Root/components/layouts/Input";
import OptionBackground from "@Root/components/layouts/OptionBackground";
import { AnimateSharedLayout } from "framer-motion";

interface Props {
  html: mdxHtml[];
}

const index: React.FC<Props> = ({ html }) => {
  const { htmlMap, put, remove } = useHashMap({ type: "Set" });
  const keyRef = useRef<HTMLInputElement>(null);

  return (
    <div className="">
      <OptionBackground>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            put(keyRef.current!.value);
            keyRef.current!.value = "";
          }}
        >
          <div className="flex space-x-3">
            <Input ref={keyRef} content="Enter Your Key" />
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
