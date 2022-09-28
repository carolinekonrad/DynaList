import express from "express";
import dotenv from "dotenv";

import log from "./utils/logger";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

const port = process.env.PORT;
app.listen(port, async () => {
  log.info(`App running at http://localhost:${port}`);
});
