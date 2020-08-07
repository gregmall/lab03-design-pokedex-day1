import React, { Component } from 'react'
import request from 'superagent';


export default class Detail extends Component {
    state = {pokemon: null}

    componentDidMount= async () =>{
        const name = this.props.match.params.myPokemonId;
        console.log(name)
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);

        const pokemon = data.body.results[0];
        console.log(pokemon.pokemon)
        this.setState({pokemon: pokemon})
    }


    render() {
        const {pokemon} = this.state;

        return (
            <div className="detail">
                {
                    pokemon 
                    ? <div className="tooltip">
                        <h2>HOVER OVER FOR MORE INFO!</h2>
                        <p>{pokemon.pokemon}</p>
                        <p>Attack: {pokemon.attack}</p>
                        <p>Defense: {pokemon.defense}</p>
                        <p>Hidden Ability: {pokemon.ability_hidden}</p>
                        <img src={pokemon.url_image} alt={pokemon.pokemon} />
                            <div className="tooltiptext">
                                <p>Height: {pokemon.height}</p>
                                <p>Shape: {pokemon.shape}</p>
                                <p>Speed: {pokemon.speed}</p>
                                <p>Hit points: {pokemon.hp}</p>
                                <p>Weight: {pokemon.weight}</p>
                                <p>Egg Group 1: {pokemon.egg_group_1}</p>                 
                                <p>Egg Group 2: {pokemon.egg_goup_2}</p> 
                                <p>Base Experience: {pokemon.base_experience}</p>
                                <p>Ability 1: {pokemon.ability_1}</p>
                            </div> 
                    </div>
                   
                        : <h2>LOADING</h2>
                }
            </div>
        )
    }
}
