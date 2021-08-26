import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, Switch } from "react-router-dom";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDvvPU7jmEKas1pQamUG9sldi2edlf8Ynw",
  authDomain: "test-a1bd0.firebaseapp.com",
  projectId: "test-a1bd0",
  storageBucket: "test-a1bd0.appspot.com",
  messagingSenderId: "132085008873",
  appId: "1:132085008873:web:ccf533a89bc059aad92378",
  measurementId: "G-DWCF6L4VKF",
});

const auth = firebase.auth();

function Login() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <Switch><Redirect to="/admin/dashboard" /></Switch>: <SignIn />}</section>
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
        Sign in with Google
      </button>
      <button className="sign-in" onClick={signInWithGithub}>
        Sign in with Github
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
        {/* <section>{user ? <p>you are logged in</p>: <Switch><Redirect to="/home" /></Switch>}</section> */}
      </>
    )
  );
}

export {Login, SignIn, SignOut};
