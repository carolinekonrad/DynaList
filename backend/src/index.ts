import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Running server on port ${port}`));
