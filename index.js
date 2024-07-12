import express from "express";
import cors from "cors";
import newsRouter from "./routes/newsRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(newsRouter);
app.listen(8080, ()=>console.log("server running at 8080"))