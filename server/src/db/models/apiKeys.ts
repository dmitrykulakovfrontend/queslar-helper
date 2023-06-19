import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema(
  {
    api: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { strict: false }
);

// Compile model from schema
export const PlayerModel = mongoose.model("players", PlayerSchema);
