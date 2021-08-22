import ChartistGraph from "react-chartist";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function UserGraph() {
  var data = {
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
    series: [[287, 385, 490, 492, 554, 586, 698, 695]],
  };

  var options = {
    low: 0,
    high: 800,
    showArea: false,
    height: "245px",
    axisX: {
      showGrid: false,
    },
    lineSmooth: true,
    showLine: true,
    showPoint: true,
    fullWidth: true,
    chartPadding: {
      right: 50,
    },

    // high: 10,
    // low: -10,
    // axisX: {
    //   labelInterpolationFnc: function (value, index) {
    //     return index % 2 === 0 ? value : null;
    //   },
    // },
  };

  var type = "Line";
  var responsiveOptions = [
    [
      "screen and (max-width: 640px)",
      {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ];
  return (
    <div>
      <ChartistGraph
        data={data}
        options={options}
        type={type}
        responsiveOptions={responsiveOptions}
      />
    </div>
  );
}
export default UserGraph;
