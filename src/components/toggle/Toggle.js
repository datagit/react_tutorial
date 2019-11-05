// toggle.js

import React from "react";

class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status: true
        };
    }
    handelClick = () => {
        this.setState({ status: !this.state.status })
    }
    render() {
        return (
            <button
                onClick={this.handelClick}
                data-testid="toggle"
                data-status={this.state.status}
            >
                {this.state.status === true ? "Turn off" : "Turn on"}
            </button>
        );
    }


}
export default Toggle;