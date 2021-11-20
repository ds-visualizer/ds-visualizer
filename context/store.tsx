import { User } from "@supabase/gotrue-js";
import React, { useReducer, Reducer } from "react";
import GlobalContext from "./Context";
import reducer from "./reducer";
import Action from "./types";

interface Props {}

export interface IState {
  user: User | null;
}

const initialState: IState = {
  user: {} as User,
};

const store: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<IState, Action>>(
    reducer,
    initialState
  );

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default store;
