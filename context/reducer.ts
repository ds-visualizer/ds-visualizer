import { IState } from "./store";
import Action from "./types";

export default function reducer(state: IState, action: Action): IState {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
