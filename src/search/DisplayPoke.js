import React, { Component } from 'react'

import '../App.css'
import PokeItem from './PokeItem.js';



export default class DisplayPoke extends Component {
    render() {

     
        
        return (

 
        <div className="list">
           {this.props.pokeState.map(poke => <PokeItem pokemon={poke} />)}
        </div>
        )
        
    }
}
