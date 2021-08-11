function Home() {
  return (
    <div>
      <h1 className="home-title">WeightN</h1>
      <div className="signup">
        <p>
          Peter Griffin: Oh, okay, here's another riddle. A woman has two
          children. Now, a homicidal maniac tells her she can only keep one.
          Which one does she let 'im kill? Brian Griffin: That's, that's not a
          riddle. That's, that's just terrible. Peter Griffin: Wrong! It's the
          ugly one.
        </p>
        <fieldset className="signup-field">
          <legend> Sign-Up</legend>
          <div>
            <label for="first">First Name:</label>
            <input type="text" id="first" name="firstname" />
          </div>
          <div>
            <label for="last">Last Name:</label>
            <input type="text" id="last" name="lastname" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" />
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default Home;
