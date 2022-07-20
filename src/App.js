import React from "react";
import Character from "./components/Character";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            favorites: [],
        };
    }

    async componentDidMount() {
        const request = await fetch("https://thronesapi.com/api/v2/Characters");

        // console.log(request);
        const response = await request.json();
        // console.log(response);

        const requestContinents = await fetch(
            "https://thronesapi.com/api/v2/Continents"
        );
        const resonseContinents = await requestContinents.json();
        console.log(resonseContinents);

        this.setState({
            characters: response,
        });
    }

    handleFavoriteClick = (character) => {
        const clonedFavorites = [...this.state.favorites, character];
        this.setState({
            favorites: clonedFavorites,
        });
    };

    handleRemoveFavoriteClick = (character) => {
        const clonedFavorites = [...this.state.favorites];
        const index = clonedFavorites.indexOf(character);
        clonedFavorites.splice(index, 1);

        this.setState({
            favorites: clonedFavorites,
        });
    };

    render() {
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
                                favorite={() =>
                                    this.handleFavoriteClick(character)
                                }
                            />
                        );
                    })}
                </div>
                <ul className="favoritesList p-3">
                    <h3>Favorites :</h3>
                    {this.state.favorites.map((character) => {
                        return (
                            <li className="d-flex justify-content-between m-2">
                                {character.fullName}
                                <button
                                    className="ms-2"
                                    onClick={() =>
                                        this.handleRemoveFavoriteClick(
                                            character
                                        )
                                    }
                                >
                                    X
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
