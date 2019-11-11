import React, { Component } from "react";
import Score from "../Score";
import "./style.css";

class Navbar extends Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav ul-auto">
                    <li className="navbar-brand">
                        <a href="/">Hero Clicky Game</a>
                    </li>
                    <Score 
                        score={this.props.score}
                        topScore={this.props.topScore}/>
                </ul>            
            </nav>
        );
    }
}

export default Navbar;