import React, { Component } from 'react'

import '../App.css'
import PokeItem from './PokeItem.js';



export default class DisplayPoke extends Component {
    render() {

     
        
        return (<div className="list">
            <div className="pagenumber">
                {
                  this.props.pokeState.length > 0 && <div>
                      {
                            Number(this.props.currentPage) !== 1 && <button onClick={this.props.handlePrevClick}>Previous Page</button>
                      }
                      {
                            Number(this.props.currentPage) !== Number(this.props.totalPages) && <button onClick={this.props.handleNextClick}>Next Page</button>
                      }
                      {this.props.currentPage} of {this.props.totalPages}

            </div>
                      
                      
                }
          

 
        <div className="pokedisplay" >
           {this.props.pokeState.map(poke => <PokeItem pokemon={poke} />)}
        </div>
        </div>
        </div>
        )
        
    }
}
