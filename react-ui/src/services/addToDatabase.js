import firebase from "firebase/app";
import "firebase/firestore";



let unsubscribe;

export default function addToDatabase(newWeight, newHeight){
  console.log("i entered the add to database function");
  const formRef = firebase.firestore().collection('form1');
  const auth = firebase.auth().currentUser;

  
    if(auth){
      console.log("i entered the if statement to database function");
      const {serverTimestamp} = firebase.firestore.FieldValue;
      formRef.add({
        uid: auth.uid,
        Height: newHeight,
        weight: newWeight,
        createdAt: serverTimestamp()
      })
      unsubscribe = formRef
        .where('uid', '==', auth.uid)
        .orderBy('createdAt')

    } else {
      console.log("i entered the else of the database function");
      unsubscribe && unsubscribe();
    }
  
}