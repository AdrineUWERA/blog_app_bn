import mongoose from "mongoose"; 

const BlogSchema = new mongoose.Schema({
  author: {
    type: String,
    default: "Adrine UWERA",
  },
  datePublished:{
    type: Date,
    default: new Date(),
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }, 
});

const Blog = new mongoose.model("blog", BlogSchema);

export default Blog;
