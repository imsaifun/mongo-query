import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
    {
        name: { type: String },
        img: { type: String },
        year: { type: Number },
        genre: { type: [String] },
        position: { type: [String] },
        rating: { type: Number }
    },
    { timestamps: true }
);

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);