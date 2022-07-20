import React from "react";
import App from "../App";

class Continents extends React.Component {
    render() {
        const img = "";

        return (
            <div className="card m-4 p-4 rounded border border-warning bg-dark text-warning">
                <img
                    className="card-img-top"
                    src={this.props.image}
                    alt={this.props.name}
                />
                <h3 className="card-title text-center mt-4">
                    {this.props.name}
                </h3>
            </div>
        );
    }
}

export default Continents;
