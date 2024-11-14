// shayari.model.ts
import { Schema, model, models } from "mongoose";

const shayariSchema = new Schema({
  quote: {
    type: [String],  // Changed this line - removed the array wrapper
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  
});

const Shayari = models?.Shayari || model("Shayari", shayariSchema);

export default Shayari;