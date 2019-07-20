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

  render() {
    return (
      <WaterConsumer>
        {({ waterRemaining }) => (
          <Container>
            <Water percentageRemaining={this.calculatePercentage()}>
              <TextContainer>
                <NumberContainer>
                  <Number>{waterRemaining}</Number>
                  <Measurement>GAL</Measurement>
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
