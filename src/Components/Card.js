import React, { Component } from 'react';

/* global componentHandler */

export default class Card extends Component {
    constructor() {
        super();
    }

    render() {
        let teach = [];
        let learn = [];
        if (this.props.user.teach) {
            this.props.user.teach.forEach((skill, index) => {
                teach.push(<li key={index}>{skill}</li>);
            })
        }
        if (this.props.user.learn) {
            this.props.user.learn.forEach((skill, index) => {
                learn.push(<li key={index}>{skill}</li>);
            })
        }

        return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text dark-text">{this.props.user.name}, {this.props.user.location}</h2>
                </div>
                <div className="skills-list mdl-grid">
                    <div className="teaching dark-text mdl-cell mdl-cell--6-col">
                        <h6>Teaching</h6>
                        <ul>
                            {teach}
                        </ul>
                    </div>
                    <div className="learning dark-text mdl-cell mdl-cell--6-col">
                        <h6>Learning</h6>
                        <ul>
                            {learn}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props.user);
    }
}

Card.propTypes = {
    user: React.PropTypes.object.isRequired
}