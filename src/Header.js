import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
           <header className="header">
               <h1>Pokemon</h1>
               <div className="headergif">
                   <img src="/ball.gif"  alt="ball" />
               </div>
               <nav>
               <Link to="/">Home</Link>
               
               </nav>
            </header>
                
           
        )
    }
}
