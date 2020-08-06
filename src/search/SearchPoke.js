import React from 'react';


import request from 'superagent';
import DisplayPoke from '../display/DisplayPoke.js';
;


class SearchPoke extends React.Component {
  state = { 
    search: '',
    searchBy: 'pokemon',
    isLoading: false,
    pokeState: []
  }
  
  handleClick = async () => {
   
    this.setState({ isLoading: true })
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&${this.state.searchBy}=${this.state.search}`);

    this.setState({ 
      pokeState: data.body.results,
      isLoading: false,
     })
  }


  render() {
    const { isLoading, pokeState } = this.state;
    console.log(pokeState)
    return (
      <div>
          <input onChange={(e) => this.setState({ search: e.target.value})} />
          <select onChange={(e) => { this.setState({ searchBy: e.target.value })} }>
            
            <option value='type'>TYPE</option>
            <option value='pokemon'>NAME</option>
            <option value='defense'>DEFENSE</option>
            <option value='attack'>ATTACK</option>
          </select>
          <button onClick={this.handleClick}>Fetch Pokemon!</button>
          {
            isLoading 
              ? <p>LOADING</p> 
              : pokeState.map(poke => <DisplayPoke pokemon={poke} />)
          }
        </div>
    );
  }
}



export default SearchPoke;