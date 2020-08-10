import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {



    render() {
        return (
           
        <Link to={`/detail/${this.props.pokemon.pokemon}`}>
            <div className="pokeCard">
            <p>{this.props.pokemon.pokemon}</p>
            <img src={this.props.pokemon.url_image} alt={this.props.pokemon} />
            </div>
         </Link>
         
        )
    }
}
