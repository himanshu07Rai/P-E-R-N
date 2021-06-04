import { DATA_LOADED, LOGOUT } from "../types";

const initialState = {
  todos: [],
};

const func = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_LOADED:
      return {
        ...state,
        todos: payload,
      };
    case LOGOUT:
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export default func;
