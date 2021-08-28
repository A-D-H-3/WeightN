import React, { useState, useRef } from "react";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, Switch } from "react-router-dom";
import "firebase/auth";
import GOOGLE from "../assets/img/google-icon-removebg-preview-300x300.png";
import GITHUB from "assets/img/github-icon-removebg-preview.png";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCYJGI1gJ9Nrl5gdJBgiPU0IGfUuS-OsQc",
  authDomain: "weightn-b55bb.firebaseapp.com",
  projectId: "weightn-b55bb",
  storageBucket: "weightn-b55bb.appspot.com",
  messagingSenderId: "522300577216",
  appId: "1:522300577216:web:9ecbfe727bfaf328aaa425",
  measurementId: "G-2GSK9L8ZHR",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function Login() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <header>
        {/* <h1>⚛️🔥💬</h1> */}
        <SignOut />
      </header>

      <section>
        {user ? (
          <Switch>
            <Redirect to="/admin/dashboard" />
          </Switch>
        ) : (
          <SignIn />
        )}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const signInWithGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        <span className="sign-in__text">Sign in with: </span>
        <span className="sign-in-google">
          <img src={GOOGLE} />
        </span>
      </button>
      <button className="sign-in" onClick={signInWithGithub}>
        <span className="sign-in__text">Sign in with: </span>
        <span className="sign-in-github">
          <img src={GITHUB} />
        </span>
      </button>
    </>
  );
}

function SignOut() {
  const [user] = useAuthState(auth);
  return (
    auth.currentUser && (
      <>
        <button className="sign-out" onClick={() => auth.signOut()}>
          Log out
        </button>
        <section>
          {user ? (
            <p>you are logged in</p>
          ) : (
            <Switch>
              <Redirect to="/home" />
            </Switch>
          )}
        </section>
      </>
    )
  );
}

/* ***************Chat Components***************** */

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export { Login, SignIn, SignOut, ChatRoom };
