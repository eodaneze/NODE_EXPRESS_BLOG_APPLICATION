import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import dotenv from "dotenv"

const app = express();
app.use(express.json());
dotenv.config()

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
      process.env.MONGO_URL
  )
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("server listening on ports");
});

// FOQNfjHp3ldJHBvv
