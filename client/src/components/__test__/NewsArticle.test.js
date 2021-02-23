import React from 'react';
import ReactDOM from 'react-dom';
import NewsArticle from "./../NewsArticle";
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

const newsObj = {
    source: {
        "id": null,
        "name": "Yahoo Entertainment"
    },
    author: "AFP",
    title: "Vaccine hopes boost British pound",
    description: "The British pound continued a frantic two-month rise against the euro and the dollar, reaching new highs Monday in a sign of traders' enthusiasm for the...",
    url: "https://news.yahoo.com/vaccine-hopes-boost-british-pound-032804944.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/G2nZb5KC19af_vZPEDV7.g--~B/aD01MTI7dz03Njg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/afp.com/0d2d90fb77d26ecf1317517a3e55fe84",
    publishedAt: "2021-02-23T03:28:04Z",
    content: "The British pound continued a frantic two-month rise against the euro and the dollar, reaching new highs Monday in a sign of traders' enthusiasm for the country's vaccination roll-out.\r\nJust before C… [+2777 chars]"
};

afterEach(cleanup);

it("renders NewsArticle component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewsArticle news={newsObj}></NewsArticle>, div);
});

it("renders NewsArticle component correctly", () => {
    const {getByTestId} = render(<NewsArticle news={newsObj}></NewsArticle>);
    const newsarticle = getByTestId('newsarticle');
    
    expect(newsarticle).toContainElement(newsarticle);
    expect(newsarticle).toHaveClass("news")
});

it("matches snapshot", () => {
    const domTree = renderer.create(<NewsArticle news={newsObj}></NewsArticle>).toJSON();
    expect(domTree).toMatchSnapshot();
});