import React, { useEffect, useState } from 'react';
import NewsArticle from "./NewsArticle";
import config from "./../config/config";

function NewsList() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        fetchNewsList();
    }, [])

    async function fetchNewsList() {
        const response = await fetch(config.URL).catch(err => console.log("err : ", err));

        const reader = response.body.getReader();

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            const resBody = JSON.parse(Buffer.from(value).toString());
            if (resBody.articles && resBody.articles.length) {
                setNewsList(resBody.articles);
            }
        }
    }

    return(
        <div>
            <h1 className="heading">UK News</h1>
            <div className="all__news">
                {
                    newsList.map((news, i) => <NewsArticle key={i} news={news}/>)
                }
            </div>
        </div>
        
    )
}

export default NewsList