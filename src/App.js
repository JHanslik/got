import React from "react";
import Character from "./components/Character";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            characters: [],
        };
    }

    async componentDidMount() {
        const request = await fetch("https://thronesapi.com/api/v2/Characters");

        // console.log(request);
        const response = await request.json();
        console.log(response);

        this.setState({
            characters: response,
        });
    }

    render() {
        // console.log(this.state.characters);
        return (
            <div className="container d-flex flex-column align-items-center">
                <h1 className="text-center w-50 mt-5 bg-light rounded border border-dark">
                    Game of thrones
                </h1>
                <div className="d-flex flex-wrap justify-content-center">
                    {this.state.characters.map((character) => {
                        return (
                            <Character
                                name={character.fullName}
                                title={character.title}
                                image={character.imageUrl}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;
