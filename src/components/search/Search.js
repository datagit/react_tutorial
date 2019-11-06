// search.js
import React, {Component} from 'react'
const API = 'https://jsonplaceholder.typicode.com/todos/1';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }
    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({user:data}));
    }
    render() {
        const user = this.state.user;
        console.log(user);
        return (
            <div>
                <span>ABC</span>
                <summary data-testid="id">{user.userId}</summary>
                <strong data-testid="title">{user.title}</strong>
                <strong data-testid="completed">{user.completed}</strong>
            </div>
        );
    }
}
export default Search;