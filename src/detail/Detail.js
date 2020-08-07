import React, { Component } from 'react'
import request from 'superagent';


export default class Detail extends Component {
    state = {pokemon: null}

    componentDidMount= async () =>{
        const name = this.props.match.params.myPokemonId;
        console.log(name)
        const data = await request.get(`http://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);

        const pokemon = data.body.results[0];
        console.log(pokemon.pokemon)
        this.setState({pokemon: pokemon})
    }


    render() {
        const {pokemon} = this.state;

        return (
            <div>
                {
                    pokemon 
                    ? <div className="tooltip">
                        <p>{pokemon.pokemon}</p>
                        <p>Attack: {pokemon.attack}</p>
                        <p>Defense: {pokemon.defense}</p>
                        <p>Hidden Ability: {pokemon.ability_hidden}</p>
                        <img src={pokemon.url_image} alt={pokemon.pokemon} />
                    
                    </div>
                        : <h2>LOADING</h2>
                }
            </div>
        )
    }
}
