import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from "./../TopNav";
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

const baseProps = {
    keyword: "",
    changeHandler: jest.fn(),
    clickHandler: jest.fn(),
};

afterEach(cleanup);

it("renders TopNav component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TopNav {...baseProps} />, div);
});

it("renders TopNav component correctly", () => {
    const {getByTestId} = render(<TopNav {...baseProps} />);
    
    const topnav = getByTestId('navid');
    expect(topnav).toContainElement(topnav);
    expect(topnav).toHaveClass("topnav");
});

it("matches snapshot", () => {
    const domTree = renderer.create(<TopNav {...baseProps} />).toJSON();
    expect(domTree).toMatchSnapshot();
});