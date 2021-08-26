import { Login } from "../services/login";
import "./home.css";

function Home() {
  return (
    <div className="home-body">
      <h1 className="home-title">Welcome to WeightN!</h1>
      <div className="signup">
        <p>
          WeightN is designed to help you and your friends participate, organize
          and track weight-loss and fitness competitions.
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
