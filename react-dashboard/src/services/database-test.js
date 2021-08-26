import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";


const db = firebase.firestore();

// const firestore = firebase.firestore();

function DispalyData(){
  const userID = firebase.auth().currentUser.uid;
  const messagesRef = db.collection("messages");
 
  const query = messagesRef.where("uid",'==',userID).orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });



  return(
    <div>
      {messages && 
      messages.map((msg)=><p key={msg.id}>{msg.text}</p>)}
    </div>
  )
};

export default DispalyData;