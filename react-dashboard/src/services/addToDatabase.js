import firebase from "firebase/app";
import "firebase/firestore";



let unsubscribe;

export default function addToDatabase(newWeight, newHeightFt, newHeightIn, newBmi){
  console.log("i entered the add to database function");
  const formRef = firebase.firestore().collection('weightForm');
  const auth = firebase.auth().currentUser;

  
    if(auth){
      console.log("i entered the if statement to database function");
      const {serverTimestamp} = firebase.firestore.FieldValue;
      formRef.add({
        uid: auth.uid,
        HeightFt: newHeightFt,
        HeightIn: newHeightIn,
        Weight: newWeight,
        BMI: newBmi,
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