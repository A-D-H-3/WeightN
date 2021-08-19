import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Greeting from "../../components/storeTest";
import { updateFlag } from "../../redux/actions";
import DisplayData from "../../services/database-test";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFlag());
  },[]);
  return (
    <div>
      <h1>dashboard</h1>
      <DisplayData />
      <Greeting />
    </div>
  );
}

export default Dashboard;
