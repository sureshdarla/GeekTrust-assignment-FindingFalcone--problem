//  import {Option} from '/home/workspace/reactjs/coding-practices/fetchAndRoutingPractice/src/components/Option/index.js'

import {Component} from 'react'

import './index.css'

class Planets extends Component {
  state = {isPlanetChanged: false}

  onChangePlanet = () => {
    this.setState({isPlanetChanged: true})
  }

  render() {
    const {isPlanetChanged} = this.state
    const {planets} = this.props
    console.log('in PLANETS component:{}', planets)
    const x = 'hello'

    return (
      <div className="planet-options">
        <select onChange={this.onChangePlanet}>
          <option>{x}</option>
          <option>not</option>
        </select>
      </div>
    )
  }
}
export default Planets
