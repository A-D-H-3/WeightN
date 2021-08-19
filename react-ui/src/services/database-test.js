import { useRef } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

// firebase.initializeApp({
//   apiKey: "AIzaSyDvvPU7jmEKas1pQamUG9sldi2edlf8Ynw",
//   authDomain: "test-a1bd0.firebaseapp.com",
//   projectId: "test-a1bd0",
//   storageBucket: "test-a1bd0.appspot.com",
//   messagingSenderId: "132085008873",
//   appId: "1:132085008873:web:ccf533a89bc059aad92378",
//   measurementId: "G-DWCF6L4VKF",
// });

const db = firebase.firestore();

// const firestore = firebase.firestore();

function DispalyData(){
  const userID = firebase.auth().currentUser.uid;
  const dummy = useRef();
  const messagesRef = db.collection("messages");
  // const messages = messagesRef
  // .where("uid",'==',userID)
  // .orderBy("createdAt")
  // .onSnapshot(querySnapshot => {
  //   const items = querySnapshot.docs.map(doc =>{
  //     return `<li>${doc.data().text}</li>`
  //   })
  // });
  const query = messagesRef.where("uid",'==',userID).orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });

  // db.collection("messages").get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data().text}`);
  //     arr.push(doc.data())
  //   });


  return(
    <div>
      {messages && 
      messages.map((msg)=><p key={msg.id}>{msg.text}</p>)}
      {/* {messages} */}
      <p>data base is here</p>
    </div>
  )
};

export default DispalyData;