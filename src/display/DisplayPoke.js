import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
export default class DisplayPoke extends Component {
    render() {

        const {
            pokemon: {
                pokemon,
                url_image,
            }
        }= this.props;
  
        
        return <Link to={`/detail/${pokemon}`}>
            <p className="tooltip">My Name Is {pokemon}</p>
            <img src={url_image} alt={pokemon} />


        </Link>
 
 
        
    }
}
