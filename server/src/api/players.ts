import express from "express";

import fetchData from "../../utils/fetchData";
import fs from "fs/promises";
import path from "path";
const router = express.Router();

const filePathToPlayers = path.join(__dirname, "../../players.json");

export async function readPlayers() {
  let rawData = "";
  try {
    rawData = await fs.readFile(filePathToPlayers, "utf-8");
  } catch (error) {
    if (error instanceof Error && "code" in error) {
      if (error.code === "ENOENT") {
        await fs.writeFile(filePathToPlayers, "[]");
        rawData = "[]";
      }
    }
  }
  return JSON.parse(rawData);
}

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
  const players = await readPlayers();
  players.push(api);
  await fs.writeFile(filePathToPlayers, JSON.stringify(players));
  res.json(true);
});

router.get("/", async (req, res) => {
  const players = await readPlayers();
  res.json(players);
});

export default router;

