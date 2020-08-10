import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchPokemon extends Component {



   
    render() {
        return (
        <div className="search">
        <input onChange={this.props.search} />
        
        {/* <button onClick={this.props.click}>Get Pokemon!</button> */}
         
        </div>
        )
    }
}
