import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import './App.css';
import SearchPoke from './search/SearchPoke.js';
import Detail from './detail/Detail'
import Header from './Header.js'


class App extends React.Component {



render() {
  
return (
   

  <>
    <div className="app">

      <Router>
        <Header />
          {/* <header>
            <ul>
              <li className="title">
                POKEMON!
              </li>
              <li>
                  <Link to="/">Home</Link>
              </li>
              </ul>
          </header> */}
          <Switch>
            <div className="box">
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
              </div>
          </Switch>
      </Router>





    </div>
  </>
  );
}

}

export default App;
