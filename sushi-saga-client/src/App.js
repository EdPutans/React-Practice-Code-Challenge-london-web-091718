import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

state = {
  sushis: [],
  loadedSushis: [],
  consumedSushis: [],
  remainder: 120
}

//Remove sushi from loaded 4
addSushiToTable=(sushiObj)=>{
  // if sushi's status is consumed - do nothing
if (sushiObj.consumed) return;
// if the clicked sushi is one of the array ones, remove it from loaded sushis and set status to consumed
if (this.state.remainder >= sushiObj.price){
  let newLoadedSushis = this.state.loadedSushis.map(sushi => {
    if (sushi === sushiObj) {sushi.consumed = true}
    return sushi
  })
  // additionally change the remaining cash and update loaded
  this.setState({ 
    loadedSushis: [...newLoadedSushis],
    consumedSushis: [...this.state.consumedSushis, sushiObj],
    remainder: this.state.remainder - sushiObj.price 
  })
}
}

//after clicking the MoRE suShiS button, changes all the consumed to non consumed so can be loaded again
reloadSushis = () => {
  let notYetReloadedSushis = JSON.stringify(this.state.sushis)
  let reloadedSushis = JSON.parse(notYetReloadedSushis)
  reloadedSushis.forEach(sushi => sushi.consumed = false)
  console.log("reloaded: ", reloadedSushis)
  this.setState({ sushis: reloadedSushis })
} 

//load the 4 random sushis into the state
loadFourRandomSushis = () => {
  const shownSushis = this.getFourRandomSushis()
  this.reloadSushis()
  this.setState({ 
    loadedSushis: shownSushis
   })

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
        <SushiContainer
          loadedSushis={this.state.loadedSushis}
          addSushiToTable={this.addSushiToTable}
          loadFourRandomSushis={ this.loadFourRandomSushis}
          />
        <Table 
        remainder={this.state.remainder}
        consumedSushis={this.state.consumedSushis} />
      </div>
    );
  }
}

export default App;