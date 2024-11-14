import { Schema, model, models } from "mongoose";

const quoteSchema=new Schema({
  quote: {
    type: String
  },
  author: {
    type: String
  },
  category: {
    type: [String]
  },
  hindi_quote: {
    type: String
  },
  author_hindi: {
    type: String
  },
  likes: {
    type: Number
  }
});

const Quote = models?.Quote || model("Quote", quoteSchema);

export default Quote;