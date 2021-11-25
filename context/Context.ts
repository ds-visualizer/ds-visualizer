import { createContext } from "react";
import { IState } from "./store";
import Action from "./types";

interface ContextState {
  state: IState;
  dispatch: React.Dispatch<Action>;
}

const GlobalContext = createContext({} as ContextState);

export default GlobalContext;
