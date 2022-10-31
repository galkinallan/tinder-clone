import Card from "../models/Card.js";

export default {
  getCards: async (req, res) => {
    try {
      const cards = await Card.find();
      console.log(cards);
      res.status(200).json(cards);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  createCard: async (req, res) => {
    const card = req.body;
    const newCard = new Card(card);

    try {
      await newCard.save();
      res.status(201).json(newCard);
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  },
};
