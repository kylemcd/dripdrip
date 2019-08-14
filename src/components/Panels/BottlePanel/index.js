import React, { Component } from 'react';

import {
  Counter
} from '../../../components';

import {
  WaterContext
} from '../../../context';

import { 
  Heading,
  Container
} from './styled';

class BottlePanel extends Component {

  subtractFromTotal = (count) => {
    const  { updateWaterAmount } = this.context;

    const gallonsPerBottle = 0.1320312;

    const waterUsage = count * gallonsPerBottle;

    updateWaterAmount(waterUsage);
  }

  render() {
    const { measurement } = this.context;
    return (
      <Container>
        <Heading>
          {measurement === 'liters' ? 
            'Enter amount of 480 mL bottles'
            :
            'Enter amount of 16.9oz bottles'
          }
        </Heading>
        <Counter
          onSubtract={this.subtractFromTotal.bind(this)}
        />
      </Container>
    );
  }
}

BottlePanel.contextType = WaterContext;

export default BottlePanel;
