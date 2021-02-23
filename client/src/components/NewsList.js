import React, { useEffect, useState } from 'react';
import NewsArticle from "./NewsArticle";
import config from "./../config/config";
import TopNav from './TopNav';

const NewsList = () => {
    const [newsList, setNewsList] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        fetchNewsList(filterText);
    }, [])

    const fetchNewsList = async(queryFilter) => {
        const response = await fetch(`${config.URL}?filter=${queryFilter}`)
                            .catch(err => console.log("Error fetching data : ", err));
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

    const handleClick = async(e) => {
        e.preventDefault();
        fetchNewsList(filterText);
    }

    const handleChange = (val) => {
        setFilterText(val)
    }

    return(
        <div>
            <TopNav keyword = {filterText || ""} changeHandler={handleChange} clickHandler={handleClick}/>
            <div className="all__news">
                {
                    newsList.map((news, i) => <NewsArticle key={i} news={news}/>)
                }
            </div>
        </div>
        
    )
}

export default NewsList