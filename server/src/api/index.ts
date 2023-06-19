import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import players from "./players";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/players", players);

export default router;

