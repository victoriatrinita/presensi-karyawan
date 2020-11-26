require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { port } = require("./config");
const presensisRoutes = require("./routes/presensis");

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB database is connected"))
  .catch((err) => console.log(err));

app.use("/api/presensis", presensisRoutes);
app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log("Express is running on port " + port));
