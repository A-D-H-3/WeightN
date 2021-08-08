import { connect } from 'react-redux';
import { updateUsername } from '../redux/actions';
import { Form, InputGroup, Button, FormControl} from 'react-bootstrap';

const Greeting = ({ updateUsername, username }) => {
  // greetings code
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    const name = e.target[0].value;
    updateUsername(name);
  }

  return(
    <>
      <Form onSubmit={handleSubmit}  className="home-search">
        <InputGroup className="sm-3">
          <FormControl
            defaultValue = {username}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button type="submit" variant="secondary" id="button-addon">
            Submit
          </Button>
        </InputGroup>
      </Form>
      <h1>Hello {username}!</h1>
    </>
  )
}

const mapStateToProps = state => ({
  username: state.username
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(updateUsername(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);