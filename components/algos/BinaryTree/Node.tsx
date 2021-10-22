import { motion } from "framer-motion";

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
                x: 15,
                rotate: `${0}deg`,
              }}
              animate={{
                rotate: `-${data.deg + 20}deg`,
              }}
            >
              <motion.svg
                style={{ height: data.hypo }}
                width="10"
                viewBox="0 0 10 99"
                fill="#BB86FC"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
              >
                <motion.path
                  d="M3.64645 98.3536C3.84171 98.5488 4.15829 98.5488 4.35355 98.3536L7.53553 95.1716C7.7308 94.9763 7.7308 94.6597 7.53553 94.4645C7.34027 94.2692 7.02369 94.2692 6.82843 94.4645L4 97.2929L1.17157 94.4645C0.976311 94.2692 0.659728 94.2692 0.464466 94.4645C0.269204 94.6597 0.269204 94.9763 0.464466 95.1716L3.64645 98.3536ZM3.5 0V98H4.5V0H3.5Z"
                  fill="#BB86FC"
                  height="10000"
                />
              </motion.svg>
            </motion.div>
          </>
        )}

        {data && this.left && (
          <>
            <motion.div
              className="absolute"
              initial={{
                x: 14,
                y: -3,
                rotate: `${0}deg`,
              }}
              animate={{
                rotate: `${data.deg + 20}deg`,
              }}
            >
              <motion.svg
                style={{ height: data.hypo }}
                width="10"
                viewBox="0 0 10 99"
                fill="#BB86FC"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
              >
                <motion.path
                  d="M3.64645 98.3536C3.84171 98.5488 4.15829 98.5488 4.35355 98.3536L7.53553 95.1716C7.7308 94.9763 7.7308 94.6597 7.53553 94.4645C7.34027 94.2692 7.02369 94.2692 6.82843 94.4645L4 97.2929L1.17157 94.4645C0.976311 94.2692 0.659728 94.2692 0.464466 94.4645C0.269204 94.6597 0.269204 94.9763 0.464466 95.1716L3.64645 98.3536ZM3.5 0V98H4.5V0H3.5Z"
                  fill="#BB86FC"
                />
              </motion.svg>
            </motion.div>
          </>
        )}
      </>
    );
  }
}
