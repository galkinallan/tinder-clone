import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model("Card", CardSchema);
