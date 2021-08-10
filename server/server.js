const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

//For Heroku:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// Setup server:
const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
