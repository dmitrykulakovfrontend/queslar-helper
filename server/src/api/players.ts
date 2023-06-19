import express from "express";

import fetchAPI from "../utils/fetchAPI";
import { PlayerModel } from "../db/models/apiKeys";
import { ApiData } from "../types/api";
import { AxiosError } from "axios";

const router = express.Router();

router.get("/full/:api", async (req, res) => {
  const { api } = req.params;
  if (!api) {
    res.status(400).json({ error: "No API provided" });
    return;
  }
  const data = await fetchAPI(`/player/full/${api}`);
  res.json(data);
});

router.post("/:api", async (req, res) => {
  const { api } = req.params;
  if (!api) {
    res.status(400).json({ error: "No API provided" });
    return;
  }
  try {
    console.log("Fetching new user data...");
    const data = await fetchAPI<ApiData>(`/player/full/${api}`);
    const username = data.player.username;
    console.log(`Fetched data for ${username} successfully`);
    console.log(`Saving ${username} into database...`);
    let player = await PlayerModel.findOneAndUpdate(
      { api, username },
      { ...data, username, api },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    await player.save();
    console.log(`${username} saved successfully`);
    res.json(true);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    } else {
      console.log(error);
    }
    res.status(400).json({ error });
  }
});

export default router;

