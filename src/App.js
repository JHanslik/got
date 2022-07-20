import React from "react";
import Character from "./components/Character";
import Continents from "./components/Continents";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: 1,
            characters: [],
            continents: [],
            favorites: [],
        };
    }

    async componentDidMount() {
        const request = await fetch("https://thronesapi.com/api/v2/Characters");

        // console.log(request);
        const response = await request.json();
        response.forEach((el) => {
            el.isFavorite = false;
        });
        // console.log(response);

        const requestContinents = await fetch(
            "https://thronesapi.com/api/v2/Continents"
        );
        const responseContinents = await requestContinents.json();

        responseContinents.forEach((el) => {
            el.imageUrl = `./img/${el.name.toLowerCase()}.jpg`;
        });

        this.setState({
            characters: response,
            continents: responseContinents,
        });
    }

    handleFavoriteClick = (character) => {
        const clonedFavorites = [...this.state.favorites, character];
        const clonedCharacters = [...this.state.characters];
        const indexChar = clonedCharacters.indexOf(character);
        clonedCharacters[indexChar].isFavorite = true;
        this.setState({
            character: [...clonedCharacters],
            favorites: clonedFavorites,
        });
    };

    handleRemoveFavoriteClick = (character) => {
        const clonedFavorites = [...this.state.favorites];
        const index = clonedFavorites.indexOf(character);
        clonedFavorites.splice(index, 1);

        const clonedCharacters = [...this.state.characters];
        const indexChar = clonedCharacters.indexOf(character);
        clonedCharacters[indexChar].isFavorite = false;

        this.setState({
            character: [...clonedCharacters],
            favorites: clonedFavorites,
        });
    };

    toggleTab = (i) => {
        this.setState({
            tab: i,
        });
    };
    render() {
        console.log(this.state.characters);
        return (
            <div>
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="text-center w-50 mt-5 bg-dark text-warning rounded border border-warning">
                        Game of thrones
                    </h1>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="bloc-onglets d-flex justify-content-center">
                            <div
                                className={`${
                                    this.state.tab === 1
                                        ? "tabs active-tab bg-dark text-warning"
                                        : "tabs bg-warning text-dark"
                                }`}
                                onClick={() => {
                                    {
                                        this.toggleTab(1);
                                    }
                                }}
                            >
                                Characters
                            </div>
                            <div
                                className={`${
                                    this.state.tab === 2
                                        ? "tabs active-tab bg-dark text-warning"
                                        : "tabs  bg-warning text-dark"
                                }`}
                                onClick={() => {
                                    {
                                        this.toggleTab(2);
                                    }
                                }}
                            >
                                Continents
                            </div>
                        </div>
                        {this.state.tab === 1 && (
                            <ul className="favoritesList container p-3 bg-dark text-warning text-center">
                                <h3>Favorites :</h3>
                                {this.state.favorites.map((character) => {
                                    return (
                                        <li className="d-flex justify-content-between align-items-center m-2">
                                            {character.fullName}
                                            <button
                                                className="delete ms-2 bg-warning text-dark rounded"
                                                onClick={() =>
                                                    this.handleRemoveFavoriteClick(
                                                        character
                                                    )
                                                }
                                            >
                                                <i class="bi bi-x-lg"></i>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                        <div
                            className={`d-flex flex-wrap justify-content-center`}
                        >
                            {this.state.tab === 1
                                ? this.state.characters.map((character) => {
                                      return (
                                          <div className="cardWidth">
                                              <Character
                                                  name={character.fullName}
                                                  title={character.title}
                                                  image={character.imageUrl}
                                                  favorite={() =>
                                                      this.handleFavoriteClick(
                                                          character
                                                      )
                                                  }
                                                  isFavorite={
                                                      character.isFavorite
                                                  }
                                              />
                                          </div>
                                      );
                                  })
                                : this.state.continents.map((continent) => {
                                      return (
                                          <Continents
                                              name={continent.name}
                                              image={continent.imageUrl}
                                          />
                                      );
                                  })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
