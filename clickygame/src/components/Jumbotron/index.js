import React from "react";
import "./style.css";

const Jumbotron = props => {
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center font-weight-bold">Hero Clicky Game!</h1>
          <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>
    );
}
export default Jumbotron;