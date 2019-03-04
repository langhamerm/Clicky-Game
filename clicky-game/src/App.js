// Dependencies
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PokeCard from "./components/PokeCard";
import Footer from "./components/Footer";
import pokemon from "./pokemon.json";

class App extends Component {
  // Set State/Score to 0
  state = {
    pokemon,
    pokeClick: [],
    score: 0
  };

  // Clicking on a Pokemon card removes the Pokemon from the array
  picClick = event => {
    const currentPokemon = event.target.alt;
    const clickedPokemon = this.state.pokeClick.indexOf(currentPokemon) > -1;

    // If a Pokemon was already clicked, restart the game
    if (clickedPokemon) {
      this.setState({
        pokemon: this.state.pokemon.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedPokemon: [],
        score: 0
      });
      alert("Woops! Game Over!");
    }
    // Otherwise increase the score and shuffle the images
    else {
      this.setState({
        pokemon: this.state.pokemon.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedPokemon: this.state.clickedPokemon.concat(
          currentPokemon
        ),
        score: this.state.score + 1
      },
      // If game has been won, alert winner, and restart game
      () => {
        if (this.state.score === 12) {
          alert("Winner! You're a Pokemon Master!");
          this.setState({
            pokemon: this.state.pokemon.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedPokemon: [],
            score: 0
          });
        }
      })
    }
  };
// Render Components
  render() {
    return (
      <div>
        <Navbar 
        score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
        {this.state.pokemon.map(pokemon => (
          <PokeCard 
          pokeClick={this.pokeClick}
          id={pokemon.id}
          key={pokemon.id}
          image={pokemon.image}
          />
        ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
