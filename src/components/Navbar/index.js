import React, { Component } from "react";
import Score from "../Score";
import Message from "../Message"
import "./style.css";

class Navbar extends Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav ul-auto">
                    <li className="navbar-brand">
                        <a href="/">Hero Clicky Game</a>
                    </li>
                    <Message
                        message={this.props.message}/>
                    <Score 
                        score={this.props.score}
                        topScore={this.props.topScore}/>
                </ul>            
            </nav>
        );
    }
}

export default Navbar;