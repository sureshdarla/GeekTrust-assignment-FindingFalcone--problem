import './index.css'

const Vehicle = () => (
  <div className="vehicles">
    <div>
      <input
        type="radio"
        id="vehicle1"
        value="vehicle1"
        name="vehicle"
        //  onChange={this.inputChanged}
      />
      <label htmlFor="vehicle1">planet1</label>
    </div>
    <div>
      <input type="radio" id="vehicle2" value="vehicle2" name="vehicle" />
      <label htmlFor="vehicle2">planet1</label>
    </div>
  </div>
)

export default Vehicle
