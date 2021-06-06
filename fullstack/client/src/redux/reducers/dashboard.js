import { DATA_LOADED, LOGOUT, ADD_TODO, TODO_DELETED } from "../types";

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
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
        // payload,
      };
    case TODO_DELETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.todo_id !== payload),
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
