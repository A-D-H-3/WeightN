import {  Route, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

import AdminLayout from "../layouts/Admin.js";
import Home from '../layouts/home';
import {SignOut} from '../services/login'

const auth = firebase.auth();

function PageRouter(){
  const [user] = useAuthState(auth);

  return(
    <>
      <Route exact={true} path="/signout" render={()=> <SignOut />} />
      <Route path="/signout">
        {user ? <Redirect to="/signout" /> : <Redirect to="/home" />}
      </Route>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route exact={true} path="/home" render={()=> <Home />} />
      <Redirect from="/" to="/home" />
    </>
  )
}

export default PageRouter;