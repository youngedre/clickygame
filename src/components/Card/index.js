import React, { Component } from "react";

class Card extends Component {

    componentDidMount() {
        this.id = this.props.id;
    }
    
    render() {
        return (
            <div className="hero">
                <img
                    src={this.props.image}
                    alt="hero"
                    id={this.props.id}
                    />
            </div>
        );
    }
}

export default Card;