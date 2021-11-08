import { motion } from "framer-motion";
import Image from "next/image";

export default class Node<T> {
  private static NID = 0;

  value: T;
  right: Node<T> | null = null;
  left: Node<T> | null = null;
  id: number;
  deg: number = 0;

  constructor(value: T) {
    this.value = value;
    this.id = Node.NID++;
  }

  valueOf() {
    return this.value;
  }

  heapRender() {
    return (
      <motion.div
        key={this.id}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          duration: 2,
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
      >
        <motion.div
          layout
          className="w-10 node rounded transition-transform  flex justify-center items-center h-10 bg-gray-400"
        >
          {this.value}
        </motion.div>
      </motion.div>
    );
  }

  render(data?: { deg: number; hypo: number }) {
    if (data?.deg) {
      this.deg = data.deg;
    }
    return (
      <motion.div layout>
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
        >
          <div className="w-10 node rounded transition-transform  flex justify-center items-center h-10 bg-gray-400">
            {this.value}
          </div>
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
                rotate: `-${this.deg + 20}deg`,
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
                rotate: `${this.deg + 20}deg`,
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
      </motion.div>
    );
  }
}
