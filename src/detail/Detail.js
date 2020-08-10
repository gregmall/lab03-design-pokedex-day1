import React, { Component } from 'react'
import request from 'superagent';


export default class Detail extends Component {
    state = {pokemon: null}

    componentDidMount= async () =>{
        const name = this.props.match.params.myPokemonId;
        
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);

        const pokemon = data.body.results[0];
        
        this.setState({pokemon: pokemon})
    }

    render() {
        const {pokemon} = this.state;
        console.log(pokemon)

        return (
            <div className="detail">
                {
                    pokemon 
                    ? <div className="tooltip">
                        <h2>HOVER OVER FOR MORE INFO!</h2>
                
                        <img src={pokemon.url_image} alt={pokemon.pokemon} />
                            <span className="tooltiptext">
                                <p>Name: {pokemon.pokemon}</p>
                                <p>Attack: {pokemon.attack}</p>
                                <p>Special Attack: {pokemon.special_attack}</p>
                                <p>Defense: {pokemon.special_defense}</p>
                                <p>Special Defense: {pokemon.defense}</p>
                                <p>Ability 1: {pokemon.ability_1}</p>
                                <p>Ability 2: {pokemon.ability_2}</p>
                                <p>Hidden Ability: {pokemon.ability_hidden}</p>
                                <p>Height: {pokemon.height}</p>
                                <p>Weight: {pokemon.weight}</p>
                                <p>Shape: {pokemon.shape}</p>
                                <p>Speed: {pokemon.speed}</p>
                                <p>Hit points: {pokemon.hp}</p>
                                <p>Pokebase: {pokemon.pokebase}</p>
                                <p>Egg Group 1: {pokemon.egg_group_1}</p>                 
                                <p>Egg Group 2: {pokemon.egg_group_2}</p> 
                                <p>Base Experience: {pokemon.base_experience}</p>
                                <p>Type 1: {pokemon.type_1}</p>
                                <p>Type 2:  {pokemon.type_2}</p>
                                
                            </span> 
                    </div>
                   
                        : <h2>LOADING</h2>
                }
            </div>
        )
    }
}
