import { Router } from "express";
import { getNews } from "../controllers/newsControllers.js";

const baseURL="/api/v1/news";
const newsRouter = Router();
newsRouter.get(baseURL, getNews);
export default newsRouter;