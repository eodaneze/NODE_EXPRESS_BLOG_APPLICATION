import express from "express";
import { addBlog, getAllBlogs, getById, updateBlog } from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs )
blogRouter.post("/add", addBlog );
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);

export default blogRouter;