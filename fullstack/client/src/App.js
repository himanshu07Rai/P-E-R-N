import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/auth";
import Routes from "./Routes";
import store from "./redux/store";

const App = () => {
  // const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
