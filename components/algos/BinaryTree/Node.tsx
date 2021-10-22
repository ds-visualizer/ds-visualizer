import { motion } from "framer-motion";
import Image from "next/image";

export default class Node<T> {
  private static NID = 0;

  value: T;
  right: Node<T> | null = null;
  left: Node<T> | null = null;
  id: number;

  constructor(value: T) {
    this.value = value;
    this.id = Node.NID++;
  }

  render(data?: { deg: number; hypo: number }) {
    return (
      <>
        <motion.div
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
          initial={{
            opacity: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: [0.9, 1.1, 1],
            transition: {
              duration: 0.5,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          }}
          layout
          className="w-10  rounded flex justify-center items-center h-10 bg-gray-400"
        >
          {this.value}
        </motion.div>
        {data && this.right && (
          <>
            <motion.div
              className="absolute"
              initial={{
                rotate: `${0}deg`,
                y: -3,
              }}
              animate={{
                rotate: `-${data.deg + 20}deg`,
              }}
              style={{ transformOrigin: "top", zIndex: -1 }}
            >
              <Image
                src={"/arrow.svg"}
                width={"40px"}
                height={data.hypo + "px"}
              />
            </motion.div>
          </>
        )}

        {data && this.left && (
          <>
            <motion.div
              className="absolute"
              initial={{
                y: -3,
                rotate: `${0}deg`,
              }}
              animate={{
                rotate: `${data.deg + 20}deg`,
              }}
              style={{ transformOrigin: "top", zIndex: -1 }}
            >
              <Image
                src={"/arrow.svg"}
                width={"40px"}
                height={data.hypo + "px"}
              />
            </motion.div>
          </>
        )}
      </>
    );
  }
}
