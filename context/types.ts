import { IState } from "./store";

type SetState = {
  type: "SET_STATE";
  payload: Partial<IState>;
};

type Action = SetState;

export default Action;
