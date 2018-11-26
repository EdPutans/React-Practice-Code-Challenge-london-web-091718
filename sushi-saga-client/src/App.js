import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

state = {
  sushis: [],
  loadedSushis: [],
  remainder: 120
}

//Remove sushi from loaded 4
addSushiToTable=(sushiObj)=>{
  let newLoadedSushis = this.state.loadedSushis.filter(sushi => sushi != sushiObj)
  this.setState({  loadedSushis: [ ...newLoadedSushis.slice() ]  })

}

//load the 4 random sushis into the state
loadFourRandomSushis = () => {
  const shownSushis = this.getFourRandomSushis()
  this.setState({ loadedSushis: shownSushis })
}

//Generate 4 random sushis from the long list and return them as an array of objects
getFourRandomSushis = ()=> {
   let sushis = this.state.sushis
   let result = []
   for ( let i = 0; i < 4; i++ ){
    result.push(sushis[Math.floor(Math.random() * sushis.length)])
   }
   return result
}


//Mount
  componentDidMount(){
    console.log('getting data...')
    this.getData()
    console.log(this.state)
  }


// fetch request
  getData(){
    fetch(API)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ sushis: resp })
        this.loadFourRandomSushis()
      }
        )
  }


  render() {
    return (
      <div className="app">
        <SushiContainer loadedSushis={this.state.loadedSushis}/>
        <Table remainder={this.state.remainder} />
      </div>
    );
  }
}

export default App;