import express from "express";
import env from "dotenv";
import connectDB from "./config/dataBase.js";
import Card from "./models/Card.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(cors());

env.config({ path: "./config/.env" });

connectDB();

app.get("/", (req, res) => res.status(200).send("hello"));

app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;

  Card.create(dbCard, (err, data) => {
    console.log(data);
    if (err) {
      res.status(500).send(err);
    } else res.status(201).send(data);
  });
});

app.get("/tinder/card", (req, res) => {
  Card.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else res.status(201).send(data);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server Is Running on port ${process.env.PORT}`);
});
