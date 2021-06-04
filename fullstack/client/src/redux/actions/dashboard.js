import axios from "axios";
import { DATA_LOADED } from "../types";

export const loadData = () => async (dispatch) => {
  try {
    console.log(axios.defaults.headers.common["auth-token"]);

    // const res = await axios.get("http://localhost:4000/todos");

    const res = await axios.get("http://localhost:4000/todos");
    console.log(res.data);
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
