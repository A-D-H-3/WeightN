import firebase from "firebase/app";
import { useCollection } from "react-firebase-hooks/firestore";
import { updateGraphLog } from "../redux/actions";


const db = firebase.firestore();


export default function pullData(){
  const [user] = useAuthState(auth);
  const [value, loading, error] = useCollection(
    firestore.collection('weightForm').where("uid","==",user.uid).orderBy("createdAt").limit(6)
  );
  // const x = [];
  // const y = [];

  return(
    <>
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (updateGraphLog(value.docs))}
      </div>
      
    </>
  )
};

// function PullData(){
//   // const [user] = useAuthState(auth);
//   // const [value, loading, error] = useCollection(
//   //   firestore.collection('weightForm').where("uid","==",user.uid).orderBy("createdAt").limit(6),
//   //   {
//   //     snapshotListenOptions: { includeMetadataChanges: false },
//   //   }
//   // );
//   // const x = [];
//   // const y = [];
//   // console.log("in the pull data before if")

//   //   if(value){
//   //     value.docs.map((doc)=>{
//   //       x.push(moment.unix(doc.data().createdAt.seconds).format("ddd, MMM Do, h:mm"));
//   //       y.push(doc.data().Weight)
//   //     })
//   //     console.log("in the if statement")
//   //     updateGraphLog(value.docs, x, y);
//   //   }
//   const [user] = useAuthState(auth);
//   const [value, loading, error] = useCollection(
//     firestore.collection('weightForm').where("uid","==",user.uid).orderBy("createdAt").limit(6)
//   );
//   // const x = [];
//   // const y = [];

//   return(
//     <>
//       <div>
//         {error && <strong>Error: {JSON.stringify(error)}</strong>}
//         {loading && <span>Collection: Loading...</span>}
//         {value && updateGraphLog(value.docs)}
//       </div>
      
//     </>
//   )
// };

// function DisplayData({graph}){
//   let x = graph.x;
//   let y = graph.y;

//   return(
//     <>
//       <div>
//         {/* {error && <p><strong>Error: {JSON.stringify(error)}</strong></p>}
//         {loading && <p><span>Collection: Loading...</span></p>} */}
//         {x && y && (
//           <>
//           <ChartistGraph
//             data={{
//               labels: x,
//               series: [
//                 y,
//               ],
//             }}
//             type="Line"
//             options={{
//               showArea: false,
//               height: "245px",
//               axisX: {
//                 showGrid: false,
//               },
//               lineSmooth: true,
//               showLine: true,
//               showPoint: true,
//               fullWidth: true,
//               chartPadding: {
//                 right: 50,
//               },
//             }}
//             responsiveOptions={[
//               [
//                 "screen and (max-width: 640px)",
//                 {
//                   axisX: {
//                     labelInterpolationFnc: function (value) {
//                       return value[0];
//                     },
//                   },
//                 },
//               ],
//             ]}
//           />
//         </>
//         )}
//       </div>
      
//     </>
//   )
// };
