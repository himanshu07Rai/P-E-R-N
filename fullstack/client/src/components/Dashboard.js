import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth";
import { loadData } from "../redux/actions/dashboard";

const Dashboard = () => {
  // const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const fetchData = async () => {
    // console.log(axios.defaults.headers.common["auth-token"]);

    // const res = await axios.get("http://localhost:4000/todos");
    // console.log(res.data);
    // setData(res.data);
    dispatch(loadData());
  };
  useEffect(() => {
    fetchData();
  }, [user]);

  const loading = useSelector((state) => state.auth.loading);
  const data = useSelector((state) => state.dashboard.todos);
  if (loading) {
    return <h1>Loading</h1>;
  }

  // if (data)
  return (
    <>
      <button onClick={() => dispatch(logout())}>Logout</button>
      {data.map((todo) => (
        <h1 key={todo.todo_id}>{todo.description}</h1>
      ))}
    </>
  );
  // else {
  //   return <h1>Loading</h1>;
  // }
};

export default Dashboard;
