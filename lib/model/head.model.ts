import { Schema, model, models } from "mongoose";

const headSchema=new Schema({
  category: {
    type: String
  },
  page: {
    type: String
  },
  keywords: {
    type: [String]
  },
  title: {
    type: String
  },
  description : {
    type: String
  }
});

const Head = models?.Head || model("Head", headSchema);

export default Head;