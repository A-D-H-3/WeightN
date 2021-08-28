import { Login } from "../services/login";
import "./home.css";

function Home() {
  return (
    <div className="home-img">
      <h1 className="home-title">Welcome to WeightN!</h1>
      <div className="signup">
        <p>
          The process of planning and executing a weight-loss or fitness
          competition is a nightmare. It’s so much work and requires a lot of
          time, effort and resources that you should be spending elsewhere.{" "}
        </p>
        <p>
          WeightN allows you to focus on winning the competition while we take
          care of everything else!
        </p>
        <fieldset className="signup-field">
          {/* <legend> Sign-Up</legend> */}
          <Login />
        </fieldset>
      </div>
    </div>
  );
}

export default Home;
