import React from "react";
import App from "../App";

class Character extends React.Component {
    render() {
        return (
            <div className="card col-3 m-4 p-4 rounded border border-dark">
                <img src={this.props.image} alt={this.props.name} />
                <h3>{this.props.name}</h3>
                <h4>{this.props.title}</h4>
            </div>
        );
    }
}

export default Character;
