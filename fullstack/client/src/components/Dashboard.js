import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};

export default Dashboard;
