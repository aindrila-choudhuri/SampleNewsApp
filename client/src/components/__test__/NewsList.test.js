import React from 'react';
import NewsList from "./../NewsList";
import {render, act} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const newsObj = {
    status: "ok",
    totalResults: 59058,
    articles: [
        {
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
        },
        {
            source: {
                id: "business-insider",
                name: "Business Insider"
            },
            author: "Sarah Al-Arshani",
            title: "See pictures of the White House candlelight ceremony honoring the 500,000 Americans who died in the pandemic",
            description: "Summary List PlacementPresident Joe Biden mourned the deaths of the over 500,000 Americans who died from COVID-19 on Monday. \n\"We often hear people described as ordinary Americans. There's no such thing,\" he said during a memorial on Monday. \"There's nothing …",
            url: "https://www.businessinsider.com/biden-honors-over-500000-americans-who-died-from-covid-19-2021-2",
            urlToImage: "https://i.insider.com/60345749d920880018591664?width=1200&format=jpeg",
            publishedAt: "2021-02-23T03:24:20Z",
            content: "Insider logo\r\nThe word \"Insider\".\r\nClose icon\r\nTwo crossed lines that form an 'X'. It indicates a way to close an interaction, or dismiss a notification.\r\nHomeChevron icon\r\nIt indicates an expandable… [+3155 chars]"
        },
        {
            source: {
                id: "news24",
                name: "News24"
            },
            author: null,
            title: "News24.com | ANALYSIS | Vaccination rollout is underway, but pitfalls still remain",
            description: "While South Africa may have been lucky to get access to the Johnson & Johnson vaccine quickly, some issues still remain, writes Neil Stacey.",
            url: "https://www.news24.com/news24/Analysis/analysis-vaccination-rollout-is-underway-but-pitfalls-still-remain-20210223",
            urlToImage: "https://cdn.24.co.za/files/Cms/General/d/10906/5da0571c067a44bb9d6157ec754adaee.jpg",
            publishedAt: "2021-02-23T03:23:15Z",
            content: "While South Africa may have been lucky to get access to the Johnson &amp; Johnson vaccine quickly, some issues remain, writes Neil Stacey. \r\nSouth Africa’s vaccine rollout got underway last week, usi… [+6850 chars]"
        }
    ]
}

it("renders NewsList component without crashing", () => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(newsObj)
    }));

    const div = document.createElement("div");
    ReactDOM.render(<NewsList />, div);
});

it("renders NewsList component correctly", async() => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(newsObj)
    }));

    await act(async() => render(<NewsList />, container));
    const newsListDiv = document.querySelector("[data-testid=newslist]");
    expect(newsListDiv.children.length).toBe(2);
    expect(newsListDiv.children[0]).toHaveClass("topnav");
    expect(newsListDiv.children[1]).toHaveClass("all__news");
});

it("NewsList component snapshot testing", async() => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(newsObj)
    }));

    const domTree = await renderer.create(<NewsList />).toJSON();
    expect(domTree).toMatchSnapshot();
});