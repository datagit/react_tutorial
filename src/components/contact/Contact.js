// contact.js
import React, {Component} from 'react'
class Contact extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Contact {this.props.name} via{" "}</h1>
                <address>
                    <p>
                        <a data-testid="email" href={"mailto:" + this.props.email}>
                            email: {this.props.email}
                        </a>
                        <br/>
                        or on their
                    </p>
                    <p>
                        <a data-testid="site" href={this.props.site}>
                            website: {this.props.site}
                        </a>.
                    </p>
                </address>
            </div>
        );
    }
}
export default Contact;