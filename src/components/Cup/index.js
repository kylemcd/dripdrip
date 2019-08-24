import React, { Component } from 'react';

import {
  Container,
  Water,
  TextContainer,
  NumberContainer,
  Number,
  Measurement,
  SupportingText
} from './styled';

import {
  WaterContext,
  WaterConsumer
} from '../../context';

class Cup extends Component {

  calculatePercentage = () => {
    const { waterRemaining, waterTotal } = this.context;

    const percentageRemaining = (waterRemaining / waterTotal) * 100;
    
    return percentageRemaining;
  }

  formatMeasurement = (waterRemaining) => {
    const { measurement } = this.context;

    if(measurement === 'liters'){
      waterRemaining = Math.round(waterRemaining * 3.78541);
    }

    return waterRemaining;
  }

  render() {
    return (
      <WaterConsumer>
        {({ waterRemaining, measurement }) => (
          <Container>
            <Water percentageRemaining={this.calculatePercentage()}>
              <TextContainer reposition={this.calculatePercentage() <= 40 && (100 - this.calculatePercentage())}>
                <NumberContainer>
                  <Number>{this.formatMeasurement(waterRemaining)}</Number>
                  <Measurement>
                    {measurement === 'liters' ? 'L' : 'GAL'}
                  </Measurement>
                </NumberContainer>
                <SupportingText>
                  Remaining
                </SupportingText>
              </TextContainer>
            </Water>
          </Container>
        )}
      </WaterConsumer>
    );
  }
}

Cup.contextType = WaterContext;

export default Cup;
