// hello.test.js
// https://reactjs.org/docs/testing-recipes.html#setup--teardown

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Hello from '../hello/Hello';

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

it ('src/components/hello/Hello.test.js: renders with or without a name', () => {
    // begin test case 1:
    act(() => {
        // render components
        render(<Hello />, container);
    });
    // make assertions
    expect(container.textContent).toBe('Hey, stranger');
    // end test case 1:
    // begin test case 2:
    act(() => {
        // render components
        render(<Hello name="Jenny"/>, container);
    });
    // make assertions
    expect(container.textContent).toBe('Hello, Jenny!');
    // end test case 2:
    // begin test case 3:
    act(() => {
        // render components
        render(<Hello name="Margaret"/>, container);
    });
    // make assertions
    expect(container.textContent).toBe('Hello, Margaret!');
    // end test case 3:
});