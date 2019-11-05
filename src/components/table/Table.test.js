// https://reactjs.org/docs/testing-recipes.html#setup--teardown

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Table from '../table/Table';

let characters = [
    {
        name: 'Charlie',
        job: 'Janitor',
    },
    {
        name: 'Mac',
        job: 'Bouncer',
    },
    {
        name: 'Dee',
        job: 'Aspring actress',
    },
    {
        name: 'Dennis',
        job: 'Bartender',
    },
    {
        name: 'Dat Dao',
        job: 'IT',
    },
];

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

it ('src/components/table/Table.test.js: renders with characterData', () => {
    // begin test case 1:
    act(() => {
        // render components
        render(<Table characterData={characters}/>, container);
    });
    // make assertions
    expect(container.textContent).toContain('Dat Dao');
    // end test case 1:
});