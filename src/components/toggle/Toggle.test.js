// hello.test.js
// https://reactjs.org/docs/testing-recipes.html#setup--teardown

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Toggle from "./Toggle";

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

it ('src/components/toggle/Toggle.test.js: renders with or without a name', () => {
    const onChange = jest.fn();
    // begin test case 1:
    act(() => {
        // render components
        render(<Toggle onChange={onChange}/>, container);
    });
    // get ahold of the button element, and trigger some clicks on it
    const button = document.querySelector('[data-testid=toggle]')
    // make assertions
    expect(button.innerHTML).toBe('Turn off');
    // end test case 1:
    // begin test case 2:
    act(() => {
        button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    // make assertions
    //console.log(button);
    expect(button.innerHTML).toBe("Turn on");
    // end test case 2:

    // begin test case 3:
    act(() => {
        button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    // make assertions
    //console.log(button);
    expect(button.innerHTML).toBe("Turn off");
    // end test case 3:
});