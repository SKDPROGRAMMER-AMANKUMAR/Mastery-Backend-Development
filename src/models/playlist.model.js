import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    description: {
      type: String,
      required: true,
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
  },
  { timeseries: true }
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
