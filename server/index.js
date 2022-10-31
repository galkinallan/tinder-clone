import express from "express";
import env from "dotenv";
import connectDB from "./config/dataBase.js";
import cors from "cors";
import cardsRoutes from "./routes/cards.js";

const app = express();

app.use(express.json());
app.use(cors());

env.config({ path: "./config/.env" });

connectDB();

app.use("/tinder/cards", cardsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server Is Running on port ${process.env.PORT}`);
});
