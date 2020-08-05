import React, { Component } from 'react'

export default class DisplayPoke extends Component {
    render() {
        return (
            <div className="display">
                
                {
                    this.props.isLoading ? <p>LOADING</p> : this.props.poke.map(poke => <p>NAME: {poke.pokemon} DEFENSE: { poke.defense} ATTACK: { poke.attack }</p>)
              
                }
            </div>
        )
    }
}
