import React from 'react';
import ReactDOM from 'react-dom';
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
function removeCharacter(index) {
    characters = characters.filter((character, i) => {
        return i !== index
    });
}
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table characterData={characters} removeCharacter={removeCharacter}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});