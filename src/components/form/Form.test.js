import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../form/Form';

function handleSubmit(character) {
    return {
        name: '1111111',
        job: '2222222',
    };
}
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form handleSubmit={handleSubmit}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});