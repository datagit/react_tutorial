// hello.test.js
// https://reactjs.org/docs/testing-recipes.html#setup--teardown

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Form from '../form/Form';

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

it ('src/components/form/Form.test.js: renders without func handleSubmit', () => {
    // begin test case 1:
    act(() => {
        // render components
        render(<Form />, container);
    });
    // make assertions
    expect(container.textContent).toContain('NameJob');
    // end test case 1:
});