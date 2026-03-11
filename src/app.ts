import express from "express";
import dotenv from "dotenv";
dotenv.config();
import AppDataSource from "./database/data-source.js";
import authRoutes from "./routes/auth.route.js";
import todoRoutes from "./routes/todo.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

await AppDataSource.initialize()
.then(()=> {
  console.log("Database connected succesfully");
})
.catch((error)=> {
  console.error("Database connection error:", error)
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
