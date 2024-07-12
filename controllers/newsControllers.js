import {readFileSync} from "node:fs"
const getNews =async (req, res)=>{
    console.log("A")
    let articles = readFileSync("./data/news.json");
    res.status(200).send({articles:JSON.parse(articles)});
}

export {getNews};