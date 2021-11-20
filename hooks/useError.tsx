import { useEffect, useState, Dispatch, SetStateAction } from "react";

const useError = (
  time: number = 2000
): [string, Dispatch<SetStateAction<string>>] => {
  const [msg, setMeg] = useState("");

  useEffect(() => {
    if (msg === "") return;
    setTimeout(() => setMeg(""), time);
  }, [msg]);

  return [msg, setMeg];
};

export default useError;
