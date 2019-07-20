import React, { Component, createContext } from 'react';

export const WaterContext = createContext({
  waterRemaining: '',
  waterTotal: '',
  updateWaterAmount: () => {}
});

export class WaterProvider extends Component {

  updateWaterAmount = (gallons) => {
    const { waterRemaining : prevWaterRemaining } = this.state;

    const waterRemaining = Math.round((prevWaterRemaining - gallons) * 10) / 10;

    this.setState({
      waterRemaining
    })
  }

  state = {
    waterRemaining: 48,
    // Update this with beginning user flow
    waterTotal: 50,
    updateWaterAmount: this.updateWaterAmount
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