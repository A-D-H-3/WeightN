import { Form, Button } from "react-bootstrap";
import { updateLog } from "../redux/actions";
import { connect } from "react-redux";
import addToDatabase from "../services/addToDatabase";
import BMICalculator from "compute-bmi";

function WeighIn({ updateLog }) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const logWeight = e.target[0].value;
    const logHeightFt = e.target[1].value;
    const logHeightIn = e.target[2].value;

    const convertedHeight = logHeightFt * 30.48 + logHeightIn * 2.54;
    const convertedWight = logWeight / 2.205;
    const calculateBmi = new BMICalculator({
      height: convertedHeight,
      weight: convertedWight,
    });
    const results = calculateBmi.results();

    addToDatabase(logWeight, logHeightFt, logHeightIn, results.bmi);
    updateLog(logWeight, logHeightFt, logHeightIn);
  };

  return (
    <div className="profile-form">
      <Form onSubmit={handleSearchSubmit}>
        <Form.Group className="sm-3" controlId="formBasicEmail">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="number" placeholder="Enter weight" />
        </Form.Group>
        <Form.Group className="sm-3" controlId="formBasicEmail">
          <Form.Label>Ft</Form.Label>
          <Form.Control type="number" placeholder="Enter height" />
          <Form.Label>In</Form.Label>
          <Form.Control type="number" placeholder="Enter height" />
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
  updateLog: (logWeight, logHeightFt, logHeightIn) =>
    dispatch(updateLog(logWeight, logHeightFt, logHeightIn)),
});

export default connect(null, mapDispatchToProps)(WeighIn);
