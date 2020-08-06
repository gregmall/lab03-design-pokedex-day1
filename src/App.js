import React from 'react';

import './App.css';
import SearchPokemon from './SearchPokemon.js';

import request from 'superagent';
import Header from './Header'
import DisplayPoke from './DisplayPoke'


class App extends React.Component {

state = {
  search: '',
  isLoading: false,
  pokeState: []
}
 handleClick = async () => {
   this.setState({isLoading : true})
   const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`);
   this.setState({
    pokeState: data.body.results,
   isLoading: false,
  })
  console.log(data)
  
 }

 searchPoke = (e) => this.setState({search: e.target.value})



render() {
  
return (
   

  
    <div className="app">
      <Header />
      <SearchPokemon search={this.searchPoke} click={this.handleClick} />
      
      <DisplayPoke poke={this.state.pokeState} isLoading={this.state.isLoading} />
    </div>
     
  );
}

}

export default App;
