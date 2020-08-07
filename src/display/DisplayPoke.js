import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'



export default class DisplayPoke extends Component {
    render() {

     
        
        return <Link to={`/detail/${this.props.pokemon.pokemon}`}>
            
            <p>My Name Is {this.props.pokemon.pokemon}</p>
            <img src={this.props.pokemon.url_image} alt={this.props.pokemon} />


        </Link>
 
 
        
    }
}
