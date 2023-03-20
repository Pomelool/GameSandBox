var mongoose = require("mongoose");
const { cardv2Schema } = require("./cardv2");
const { Schema } = mongoose;

const gameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    players: {
      type: Number,
      min: [1, "Not enough players"],
      max: [6, "Too many players"],
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
    },
    cardDeck: [cardv2Schema],
  },
  { timestamps: true }
);

module.exports.gameSchema = gameSchema;
module.exports.Game = mongoose.model("game", gameSchema);
