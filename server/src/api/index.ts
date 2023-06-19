import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import player from "./player";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/player", player);

export default router;

