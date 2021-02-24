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
        try{
            const response = await fetch(`${config.URL}?filter=${queryFilter}`);
            const data = await response.json();
            setNewsList(data.articles);
        }catch(err) {
            console.log("Error fetching data : ", err);
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
        <div data-testid="newslist">
            <TopNav data-testid="topnavid" keyword = {filterText || ""} changeHandler={handleChange} clickHandler={handleClick}/>
            <div data-testid="allNews" className="all__news">
                {
                    newsList.map((news, i) => <NewsArticle key={i} news={news}/>)
                }
            </div>
        </div>
        
    )
}

export default NewsList