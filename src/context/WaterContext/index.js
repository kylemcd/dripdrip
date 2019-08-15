import React, { Component, createContext } from 'react';

export const WaterContext = createContext({
  waterRemaining: '',
  waterTotal: '',
  measurement: '',
  updateWaterAmount: () => {},
  updateTotalAmount: () => {},
  changeMeasurement : () => {},
  reset: () => {}
});

export class WaterProvider extends Component {

  updateWaterAmount = (gallons) => {
    const { waterRemaining : prevWaterRemaining } = this.state;

    let waterRemaining = Math.round((prevWaterRemaining - gallons) * 10) / 10;

    localStorage.setItem('waterRemaining', waterRemaining);

    this.setState({
      waterRemaining
    })
  }

  updateTotalAmount = (gallons) => {
    const{ measurement } = this.state;
    
    if(measurement === 'liters'){
      gallons = gallons * 0.264172;
    }

    localStorage.setItem('waterTotal', gallons);

    this.setState({
      waterTotal: gallons
    })
  }

  changeMeasurement = (measurement) => {
    localStorage.setItem('measurement', measurement);
    this.setState({
      measurement
    })
  }

  reset = () => {
    const { waterTotal } = this.state;

    localStorage.setItem('waterRemaining', waterTotal);
    this.setState({
      waterRemaining: waterTotal
    })
  }

  state = {
    waterRemaining: 48,
    waterTotal: 50,
    measurement: 'gallons',
    updateWaterAmount: this.updateWaterAmount,
    updateTotalAmount: this.updateTotalAmount,
    changeMeasurement: this.changeMeasurement,
    reset: this.reset
  }

  componentDidMount = () => {
    this.initialize();
  }

  initialize = () => {
    const waterRemainingLocalStorage = localStorage.getItem('waterRemaining');
    const waterTotalLocalStorage = localStorage.getItem('waterTotal');
    const measurementLocalStorage = localStorage.getItem('measurement');
    const { waterRemaining, waterTotal, measurement} = this.state;

    if(waterRemainingLocalStorage){
      this.setState({
        waterRemaining: parseInt(waterRemainingLocalStorage, 10)
      })
    } else {
       localStorage.setItem('waterRemaining', waterRemaining);
    }

    if(waterTotalLocalStorage){
      this.setState({
        waterTotal: parseInt(waterTotalLocalStorage, 10)
      })
    } else {
       localStorage.setItem('waterTotal', waterTotal);
    }

    if(measurementLocalStorage){
      this.setState({
        measurement: measurementLocalStorage
      })
    } else {
       localStorage.setItem('measurement', measurement);
    }
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