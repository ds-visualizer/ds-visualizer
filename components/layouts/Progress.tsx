import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props {
  notIn?: Array<string>;
}

const Progress: React.FC<Props> = ({ notIn }) => {
  const router = useRouter();

  if (notIn?.includes(router.pathname)) {
    return <></>;
  }

  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const [tick, setTick] = useState(false);

  useEffect(() => yRange.onChange((v) => setTick(v >= 1)), [yRange]);
  return (
    <div className="fixed bottom-6 left-6">
      <svg className="progress-icon" width="90" height="90" viewBox="0 0 60 60">
        <motion.path
          stroke="#6D27D9"
          fill="none"
          strokeWidth="5"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength: scrollYProgress,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1,
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="3"
          stroke="white"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: tick ? 1 : 0 }}
        />
      </svg>
    </div>
  );
};

export default Progress;
