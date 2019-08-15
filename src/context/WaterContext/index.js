import React, { Component, createContext } from 'react';

export const WaterContext = createContext({
  waterRemaining: '',
  waterTotal: '',
  measurement: '',
  updateWaterAmount: () => {},
  changeMeasurement : () => {}
});

export class WaterProvider extends Component {

  updateWaterAmount = (gallons) => {
    const { waterRemaining : prevWaterRemaining } = this.state;

    let waterRemaining = Math.round((prevWaterRemaining - gallons) * 10) / 10;

    this.setState({
      waterRemaining
    })
  }

  changeMeasurement = (measurement) => {
    console.log(measurement)
    this.setState({
      measurement
    })
  }

  state = {
    waterRemaining: 48,
    // Update this with beginning user flow
    waterTotal: 50,
    measurement: 'gallons',
    updateWaterAmount: this.updateWaterAmount,
    changeMeasurement: this.changeMeasurement 
  }

  render() {
    const { children } = this.props;
    return (
      <WaterContext.Provider value={this.state}>
        {children}
      </WaterContext.Provider>
    )
  }
}

export const WaterConsumer = WaterContext.Consumer;