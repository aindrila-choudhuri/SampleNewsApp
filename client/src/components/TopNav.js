import React from 'react';
import "./styles/topnav.css";

const TopNav = (props) => {
    const {keyword, changeHandler, clickHandler} = props 

    return(
        <div data-testid="navid" className="topnav">
            <h1 className="spanheading">Latest News</h1>
            <div className="search-container">
                <input type="text" value = {keyword} onChange={e => changeHandler(e.target.value)}/>
                <button onClick={(e)=> clickHandler(e)}><i className="fa fa-search"></i></button>
            </div>
        </div>
    )
}

export default TopNav;