import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { updateGraphLog } from "../redux/actions";


// const db = firebase.firestore();

// const firestore = firebase.firestore();

export default function pullData(){
  const weightFormRef = firebase.firestore().collection('weightForm');
  const userID = firebase.auth().currentUser.uid;
  // const weightFormRef = db.collection("weightForm");
 
  const query = weightFormRef.where("uid",'==',userID).orderBy("createdAt").limit(6);
  const [userData] = useCollectionData(query, { idField: "id" });

  console.log(userData);
  // updateGraphLog(userData);

  // return(
  //   <div>
  //     {messages && 
  //     messages.map((msg)=><p key={msg.id}>{msg.text}</p>)}
  //   </div>
  // )
};