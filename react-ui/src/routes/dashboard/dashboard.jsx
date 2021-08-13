import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Greeting from "../../components/storeTest";
import { updateFlag } from "../../redux/actions";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFlag());
  });
  return (
    <div>
      <h1>dashboard</h1>
      <Greeting />
    </div>
  );
}

export default Dashboard;
