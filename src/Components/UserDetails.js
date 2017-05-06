import React, { Component } from 'react';

/* global componentHandler */

export default class UserDetails extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props.user);

        return (
            <div className="user-details mdl-grid">
                <img src={this.props.user.imgUrl} className="user-image" />
                <h2 className="dark-text">{this.props.user.name}</h2>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props.user);
    }
}

UserDetails.propTypes = {
    user: React.PropTypes.object.isRequired
}