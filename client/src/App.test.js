import React from 'react';
import App from "./App";
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

it("renders App component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
});

it("renders App component correctly", () => {
    const {getByTestId} = render(<App />);
    const app = getByTestId('app');
    
    expect(app).toContainElement(app);
    expect(app).toHaveClass("App");
});

it("app component matches snapshot", () => {
    const domTree = renderer.create(<App />).toJSON();
    expect(domTree).toMatchSnapshot();
});