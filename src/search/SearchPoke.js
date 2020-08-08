import React from 'react';
import request from 'superagent';
import DisplayPoke from './DisplayPoke.js';



class SearchPoke extends React.Component {
  state = { 
    search: '',
    searchBy: 'pokemon',
    isLoading: false,
    pokeState: [],
    currentPage: 1,
    totalPages: 1
  }
  
componentDidMount = async () => {
  const params = new URLSearchParams(this.props.location.search);
  const searchBy = params.get('searchBy');
  const page = params.get('page');
  const search = params.get('search');

if (searchBy && page && search) {
  await this.setState({
    searchBy: searchBy,
    currentPage: page,
    search: search
  });
}

// await this.makeRequest()
}

makeRequest = async () => {
  this.setState({ isLoading: true });
  const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`);

await this.setState({
  pokeState: data.body.results,
  totalPages: Math.ceil(data.body.count/20),
  isLoading: false,
})

const params = new URLSearchParams(this.props.location.search);

params.set('search', this.state.search);
params.set('searchBy', this.state.searchBy);
params.set('page', this.state.currentPage);

this.props.history.push('?' + params.toString())

}


handleClick = async () => {
   await this.setState({
      currentPage: 1
    })
    await this.makeRequest()
  }

 
handleNextClick = async () =>{
  await this.setState({ currentPage: Number(this.state.currentPage) + 1 })

  await this.makeRequest();
}

handlePrevClick = async () => {
  await this.setState({ currentPage: Number(this.state.currentPage) - 1 })

  await this.makeRequest();
}


  render() {
    const { 
      isLoading,
      currentPage,
      totalPages,
   } = this.state;
 
    return (
      <div className="search">
          <div className="sidebar">
          <select onChange={(e) => { this.setState({ searchBy: e.target.value })} }>
          
            <option value='pokemon'>NAME</option>
            <option value='type'>TYPE</option>
            <option value='defense'>DEFENSE</option>
            <option value='attack'>ATTACK</option>
          </select>
          <input onChange={(e) => this.setState({ search: e.target.value})} />
          <button onClick={this.handleClick}>Fetch Pokemon!</button>
          </div>
          <div className="display">
          {

            isLoading
              ? <p>Loading</p> 
              : <DisplayPoke handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick}
              currentPage={currentPage}
              totalPages={totalPages}
              pokeState={this.state.pokeState} />
            
          }
          </div>
          </div>
        
    );
  }
}



export default SearchPoke;