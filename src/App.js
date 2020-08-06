import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import './App.css';
import SearchPoke from './search/SearchPoke.js';
import DisplayPoke from './display/DisplayPoke'


class App extends React.Component {

// state = {
//   search: '',
//   isLoading: false,
//   pokeState: []
// }
//  handleClick = async () => {
//    this.setState({isLoading : true})
//    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`);
//    this.setState({
//     pokeState: data.body.results,
//    isLoading: false,
//   })
//   console.log(data)
  
//  }

//  searchPoke = (e) => this.setState({search: e.target.value})



render() {
  
return (
   

  <>
    <div className="app">

<Router>
          <header>
            <li>
                        <Link to="/detail">Detail</Link>
                      </li>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                    </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <SearchPoke {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:myPokemonId" 
                            exact
                            render={(routerProps) => <DisplayPoke {...routerProps} />} 
                        />
                    </Switch>
                </Router>








      {/* <Header />
      <SearchPokemon search={this.searchPoke} click={this.handleClick} />
      
      <DisplayPoke poke={this.state.pokeState} isLoading={this.state.isLoading} /> */}
    </div>
     </>
  );
}

}

export default App;
