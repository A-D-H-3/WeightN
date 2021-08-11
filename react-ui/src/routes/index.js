import { Route } from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import Challenge from "./challenge/challenges";
import Profile from "./profile/profile";
import Dashboard from "./dashboard/dashboard";
import Login from "../components/login";

const Routes = () => {
  return (
    <>
      <Route exact={true} path="/" render={() => <Home />} />
      <Route exact={true} path="/challenge" render={() => <Challenge />} />
      <Route exact={true} path="/profile" render={() => <Profile />} />
      <Route exact={true} path="/dashboard" render={() => <Dashboard />} />
      <Route exact={true} path="/about" render={() => <About />} />
      <Route exact={true} path="/login" render={() => <Login />} />
    </>
  );
};
export default Routes;
