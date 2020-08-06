import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class DisplayPoke extends Component {
    render() {
        
        
        return <Link to={`/detail/${this.props.pokemon}`}>
            <p>My Name is {this.props.pokemon}</p>
            <img src={this.props.url_image} alt={this.props.pokemon} />


        </Link>
 
 
        
    }
}
