const express = require("express");
const posts = require("./api/posts");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 4000;
app.use("/api/posts", posts);
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.end("Server is working !");
});
app.get("/api", (req, res) => {
  res.end("Go to '/api/posts'");
});

// Lancement du serveur Web
app.listen(PORT, () => console.log(`Servor launch on ${PORT}`));
