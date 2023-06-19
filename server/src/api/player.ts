import express from "express";

import fetchData from "../../../utils/fetchData";
import fs from "fs/promises";
import path from "path";
const router = express.Router();

const filePathToPlayers = path.join(__dirname, "../../players.json");

router.get("/full/:api", async (req, res) => {
  const { api } = req.params;
  if (!api) {
    res.status(400).json({ error: "No API provided" });
    return;
  }
  const data = await fetchData(api);
  res.json(data);
});

router.post("/:api", async (req, res) => {
  const { api } = req.params;
  if (!api) {
    res.status(400).json({ error: "No API provided" });
    return;
  }
  const rawData = await fs.readFile(filePathToPlayers, "utf-8");
  const players = JSON.parse(rawData);
  players.push(api);
  await fs.writeFile(filePathToPlayers, JSON.stringify(players));
  res.json(true);
});

router.get("/all", async (req, res) => {
  const rawData = await fs.readFile(filePathToPlayers, "utf-8");
  const players = JSON.parse(rawData);
  res.json(players);
});

export default router;

