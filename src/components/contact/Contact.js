// contact.js
import React, {Component} from 'react'
class Contact extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <address>
                    Contact {this.props.name} via{" "}
                    <a data-testid="email" href={"mailto:" + this.props.email}>
                        email
                    </a>
                    or on their <a data-testid="site" href={this.props.site}>
                    website
                </a>.
                </address>
            </div>
        );
    }
}
export default Contact;