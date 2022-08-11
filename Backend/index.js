const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.bodyParser());

app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);

const uri =
  "mongodb+srv://saad:helloworld123@cluster0.r2mjx.mongodb.net/AssessmentGigaLabs?retryWrites=true&w=majority";
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    app.listen(5000, () => {
      console.log("Started listening at port 5000.");
    });
  }
);
