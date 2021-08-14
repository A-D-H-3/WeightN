import React from "react";
import firebase from "firebase/app";
import Footer from "./sectioning/footer/footer";
import Header from "./sectioning/header/header";
import Main from "./sectioning/main/main";

// firebase.initializeApp({
//   apiKey: "AIzaSyDvvPU7jmEKas1pQamUG9sldi2edlf8Ynw",
//   authDomain: "test-a1bd0.firebaseapp.com",
//   projectId: "test-a1bd0",
//   storageBucket: "test-a1bd0.appspot.com",
//   messagingSenderId: "132085008873",
//   appId: "1:132085008873:web:ccf533a89bc059aad92378",
//   measurementId: "G-DWCF6L4VKF",
// });

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default App;
