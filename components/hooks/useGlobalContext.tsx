import GlobalContext from "@Root/context/Context";
import { useContext } from "react";

const useGlobalContext = () => useContext(GlobalContext);

export default useGlobalContext;
