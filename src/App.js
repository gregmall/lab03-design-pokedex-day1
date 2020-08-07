import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import './App.css';
import SearchPoke from './search/SearchPoke.js';
// import DisplayPoke from './display/DisplayPoke.js';
import Detail from './detail/Detail'


class App extends React.Component {



render() {
  
return (
   

  <>
    <div className="app">

      <Router>
          <header>
            <ul>
              <li className="title">
                POKEMON!
              </li>
              <li>
                  <Link to="/">Home</Link>
              </li>
              </ul>
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
                  render={(routerProps) => <Detail {...routerProps} />} 
                   />
          </Switch>
      </Router>





    </div>
  </>
  );
}

}

export default App;
