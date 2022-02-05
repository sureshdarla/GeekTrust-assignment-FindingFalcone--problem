import {Component} from 'react'

//  import Planets from './components/Planets'
//  import Vehicle from './components/Vehicle'

import './App.css'

const SelectedPlantes = []
const vehiclesSelected = []
const allPlanets = []
const allVehicles = []

class App extends Component {
  state = {planets: [], planetNames: [], isPlanetSelected: false}

  componentDidMount() {
    this.getPlanetsData()
    this.getVehiclesData()
    //    this.getTheToken()
  }

  getTheToken = async () => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application / json',
        Authorization:
          'Bearer 89684b7e5c1516a34c1b702401f585a47bc1e5c7711a298a870691f2ba96e952',
      },
      body: '',
    }
    const response = await fetch(
      'https://findfalcone.herokuapp.com/token',
      options,
    )
    const token = await response.json()
    console.log(token)
  }

  getPlanetsData = async () => {
    const response = await fetch('https://findfalcone.herokuapp.com/planets')
    const planetsData = await response.json()
    planetsData.map(each => allPlanets.push(each))
    console.log(allPlanets)
    this.setState({planets: planetsData})
  }

  getVehiclesData = async () => {
    const response = await fetch('https://findfalcone.herokuapp.com/vehicles')
    const vehiclesData = await response.json()
    const updateVehiclesData = vehiclesData.map(eachVehicle => ({
      name: eachVehicle.name,
      totalNo: eachVehicle.total_no,
      maxDistance: eachVehicle.max_distance,
      speed: eachVehicle.speed,
    }))
    updateVehiclesData.map(eachVehicle => allVehicles.push(eachVehicle))
    console.log('call success', allVehicles)
  }

  onSelectingPlanet = event => {
    console.log('planet changed')
    SelectedPlantes.push(event.target.value)
    this.setState({isPlanetSelected: true})
    console.log(SelectedPlantes)
  }

  renderPlanets = () => (
    //    const {planets} = this.state
    <div className="planet-options">
      <select onChange={this.onSelectingPlanet}>
        {allPlanets.map(eachPlanet => (
          <option>{eachPlanet.name}</option>
        ))}
      </select>
    </div>
  )

  onSelectingVehicle = event => {
    vehiclesSelected.push(event.target.value)
    console.log(vehiclesSelected)
  }

  renderVehicles = () => (
    <div className="vehicles">
      {allVehicles.map(eachVehicle => (
        <div>
          <input
            type="radio"
            value={eachVehicle.name}
            name="vehicle"
            id={eachVehicle.name}
            onChange={this.onSelectingVehicle}
          />
          <label htmlFor={eachVehicle.name}>
            {eachVehicle.name}( <span>{eachVehicle.totalNo}</span> )
          </label>
        </div>
      ))}
    </div>
  )

  render() {
    const {planets, isPlanetSelected, planetNames} = this.state

    return (
      <div className="planets-container">
        <h1>Hellelujah</h1>
        <div>
          {this.renderPlanets()}
          {isPlanetSelected ? this.renderVehicles() : null}
        </div>
        <div>
          {this.renderPlanets()}
          {isPlanetSelected ? this.renderVehicles() : null}
        </div>
        <div>
          {this.renderPlanets()}
          {isPlanetSelected ? this.renderVehicles() : null}
        </div>

        <span>Total time :{}</span>
      </div>
    )
  }
}

export default App
