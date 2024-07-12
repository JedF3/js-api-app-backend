import articles from "../data/news.json" assert{type:"json"};
const getNews =async (req, res)=>{
    console.log("A")
    res.status(200).send({articles:articles});
}

export {getNews};