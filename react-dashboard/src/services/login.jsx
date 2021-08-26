import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, Switch } from "react-router-dom";
import "firebase/auth";
import GOOGLE from "../assets/img/google-icon-removebg-preview.png";
import GITHUB from "assets/img/github-icon-removebg-preview.png";

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
        <span className="sign-in__text">Sign in with </span>
        <span className="sign-in-google">
          <img src={GOOGLE} />
        </span>
      </button>
      <button className="sign-in" onClick={signInWithGithub}>
        <span className="sign-in__text">Sign in with </span>
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

export { Login, SignIn, SignOut };
