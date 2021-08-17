import React from "react";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { BaseNav } from "./baseNav";
import { AuthNav } from "./authNav";



function Header() {
  const [user] = useAuthState(firebase.auth())

  return (
    <header>
     {user ? <AuthNav /> : <BaseNav />}
    </header>
  );
}

export default Header;
