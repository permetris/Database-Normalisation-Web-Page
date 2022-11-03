const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const relationsRouter = require("../routes/relations.route.js");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/relations", relationsRouter);
app.use(morgan("combined"));

module.exports = app;
