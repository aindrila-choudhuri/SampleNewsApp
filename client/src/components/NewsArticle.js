import React from "react";

function NewsArticle(props) {
    const {news} = props

    const defaultImageURL = process.env.PUBLIC_URL + "/news.jpeg"

    return(
        <div className="news" onClick={()=>window.location.href=news.url}>
            <img className="image__desc" src={news.urlToImage ? news.urlToImage : defaultImageURL} />
            <h3 className="news__title">{news.title}</h3>
            <span className="news__author">{news.author}</span> <br />
            <span className="news__published">{new Date(news.publishedAt).toString()}</span>
            <span className="news__source">{news.source.name}</span>
        </div>
    )
}

export default NewsArticle;