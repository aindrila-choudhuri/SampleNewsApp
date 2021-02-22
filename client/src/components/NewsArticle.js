import React from "react";

function NewsArticle(props) {
    const {news} = props

    return(
        <div className="news" onClick={event =>  window.location.href=news.url}>
            <h1 className="news__title">{news.title}</h1>
            <p className="news__desc">{news.description}</p>
            <span className="news__author">{news.author}</span> <br />
            <span className="news__published">{news.publishedAt}</span>
            <span className="news__source">{news.source.name}</span>
        </div>
    )
}

export default NewsArticle;