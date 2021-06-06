import axios from "axios";
import { DATA_LOADED, ADD_TODO, TODO_DELETED } from "../types";

export const loadData = () => async (dispatch) => {
  try {
    // console.log(axios.defaults.headers.common["auth-token"]);

    // const res = await axios.get("http://localhost:4000/todos");

    const res = await axios.get("http://localhost:4000/todos");
    // console.log(res.data);
    dispatch({
      type: DATA_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
};

export const addTodo = (desc) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "Application/json",
      },
    };

    const body = JSON.stringify(desc);
    const res = await axios.post("http://localhost:4000/todos", body, config);
    dispatch({
      type: ADD_TODO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    // console.log(id);
    const res = await axios.delete(`http://localhost:4000/todos/${id}`);
    // console.log(res.data);
    dispatch({
      type: TODO_DELETED,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};
