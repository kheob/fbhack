import React, { Component } from 'react';

/* global componentHandler */

// Components;
import Card from "./Card";
import UserDetails from "./UserDetails";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            currentUser: {},
            loggedInUser: {}
        };
    }

    render() {
        return (
            <div className="home">
                <UserDetails user={this.state.loggedInUser} />
                <div className="card-container">
                    <Card user={this.state.currentUser} learn={this.state.currentUser.learn} teach={this.state.currentUser.teach} />
                    <div className="mdl-grid">
                        <button className="mdl-cell mdl-cell--6-col previous-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                            onClick={this.previousButton.bind(this)}
                        >
                            Previous
                        </button>
                        <button className="mdl-cell mdl-cell--6-col next-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                            onClick={this.nextButton.bind(this)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        // Dummies
        let users = [{
            name: "Fred",
            location: "Melbourne",
            learn: ["Cooking", "Programming"],
            teach: ["Tennis", "Running"]
        },
        {
            name: "Jill",
            location: "Frankston",
            learn: ["Piano", "Guitar"],
            teach: ["Cooking", "Driving"]
        },
        {
            name: "Joe",
            location: "Docklands",
            learn: ["Accounting", "Guitar"],
            teach: ["Cooking", "Baseball"]
        }];

        // Get users
        let currentUserIndex = 0;

        let loggedInUser = {
            name: "Bob",
            location: "Melton",
            learn: ["Coding", "Guitar"],
            teach: ["Cooking", "Typing"],
            imgUrl: "http://copicola.com/images/profile-pics/profile-pics-24.jpg"
        };

        this.setState({
            users,
            currentUser: users[currentUserIndex],
            currentUserIndex,
            loggedInUser
        });
    }

    previousButton(e) {
        let noUsers = this.state.users.length;
        let currentUserIndex = this.state.currentUserIndex - 1;
        if (currentUserIndex < 0) {
            currentUserIndex = noUsers - 1;
        }
        console.log(currentUserIndex);
        this.setState({
            currentUserIndex,
            currentUser: this.state.users[currentUserIndex]
        })
    }

    nextButton(e) {
        let noUsers = this.state.users.length;
        let currentUserIndex = this.state.currentUserIndex + 1;
        currentUserIndex = currentUserIndex % noUsers;
        console.log(currentUserIndex);
        this.setState({
            currentUserIndex,
            currentUser: this.state.users[currentUserIndex]
        })
    }
}