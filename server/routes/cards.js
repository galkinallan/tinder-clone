import express from "express";
import cardsController from "../controllers/cards.js";
const router = express.Router();

router.get("/", cardsController.getCards);
router.post("/", cardsController.createCard);

export default router;
