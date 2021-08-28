import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { updateGraphLog } from "../redux/actions";


// const db = firebase.firestore();

// const firestore = firebase.firestore();

export default function pullData(){
  const weightFormRef = firebase.firestore().collection('weightForm');
  const auth = firebase.auth().currentUser;
  // const weightFormRef = db.collection("weightForm");

  const query = weightFormRef.where("uid",'==',auth.uid).orderBy("createdAt").limit(6);
  const [userData] = useCollectionData(query, { idField: "id" });

  console.log(userData);
  updateGraphLog(userData);
 
  

  return(
    <>
      {userData && 
      userData.map((msg)=>{
        <ChartistGraph
        data={{
          labels: [
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM",
            "3:00AM",
            "6:00AM",
          ],
          series: [
            [287, 385, 490, 492, 554, 586, 698, 695],
          ],
        }}
        type="Line"
        options={{
          low: 0,
          high: 800,
          showArea: false,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50,
          },
        }}
        responsiveOptions={[
          [
            "screen and (max-width: 640px)",
            {
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ]}
      />
      })}
    </>
  )
};