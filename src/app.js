import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API");
});

export default app;
