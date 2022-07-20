import React from "react";
import App from "../App";

class Character extends React.Component {
    render() {
        return (
            <div
                className={`card m-3 p-4 rounded border ${
                    this.props.isFavorite === true
                        ? "bg-dark text-warning border-warning"
                        : "bg-light border-dark"
                }`}
                // style={{ width: "vw" }}
            >
                <img
                    className="card-img-top"
                    src={this.props.image}
                    alt={this.props.name}
                />
                <h3 className="card-title">{this.props.name}</h3>
                <h4 className="card-text">{this.props.title}</h4>
                {!this.props.isFavorite && (
                    <button
                        className="btn favorite bg-dark text-warning"
                        onClick={this.props.favorite}
                    >
                        Add Favorite
                    </button>
                )}
            </div>
        );
    }
}

export default Character;
