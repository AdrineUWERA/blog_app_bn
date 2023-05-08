import express from "express";
import {
  CreateBlog,
  UpdateBlog,
  DeleteBlog,
  GetAllBlogs,
  GetOneBlog,
} from "../controllers/BlogControllers.js";
import { isLoggedIn } from "../middlewares/user.middlewear.js";
import {blogValidator, updateblogValidator} from "../validations/blogValidation/blogValidator.js";

const blogRouter = express.Router();

blogRouter.post("/", blogValidator, CreateBlog);
blogRouter.patch("/:id", updateblogValidator, UpdateBlog);
blogRouter.delete("/:id", DeleteBlog);
blogRouter.get("/", GetAllBlogs);
blogRouter.get("/:id", GetOneBlog);

export default blogRouter;
