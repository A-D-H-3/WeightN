import { Form, Button } from "react-bootstrap";
import { updateLog } from "../redux/actions";
import { connect } from "react-redux";

function WeighIn({ updateLog }) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const logWeight = e.target[0].value;
    const logHeight = e.target[1].value;

    console.log(e.target);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    //   const selected_keywords = e.target[0].value;

    updateLog(logWeight, logHeight);

    //   updateReviews(selected_keywords, selected_platforms, selected_genres);
  };

  return (
    <div>
      <Form onSubmit={handleSearchSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="number" placeholder="Enter weight" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Height</Form.Label>
          <Form.Control type="text" placeholder="Enter height" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

// const mapStateToProps = (state)=>({
//     logWeight: state.logWeight,
//     lo
// })

const mapDispatchToProps = (dispatch) => ({
  updateLog: (logWeight, logHeight) =>
    dispatch(updateLog(logWeight, logHeight)),
});

export default connect(null, mapDispatchToProps)(WeighIn);
