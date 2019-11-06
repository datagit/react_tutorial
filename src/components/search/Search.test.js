// search.test.js
// https://reactjs.org/docs/testing-recipes.html#setup--teardown

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Search from '../search/Search';

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

it("renders user data", async () => {
    // begin test case 1:
    const fakeUser = {
        name: "Joni Baez",
        age: "32",
        address: "123, Charming Avenue"
    };
    await act(async () => {
        render(<Search />, container);
    });
    // // make assertions
    // // expect(container.querySelector("summary").textContent).toBe('1');
    // console.log(container.textContent);
    // expect(container.textContent).toContain(1);
    // // end test case 1:
});