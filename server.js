require("dotenv").config();
const express = require("express");
const path = require("path");

const { PORT } = process.env;

const app = express();

// Serving up the static build file for React
app.use(express.static(path.resolve(__dirname + "/react-dashboard/build")));

app.get("/heartbeat", (req, res) => {
  res.send("Hello!! I am heartbeat channel!");
});

app.get('*', function(req, res, next) {
  res.sendFile(__dirname + '/react-dashboard/build/');
 });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
