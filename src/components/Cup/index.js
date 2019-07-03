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

// TODO: fetch these values
const percentageRemaining = 70;
const gallonsRemaining = 20;

class Cup extends Component {
  render() {
    return (
      <Container>
        <Water percentageRemaining={percentageRemaining}>
          <TextContainer>
            <NumberContainer>
              <Number>{gallonsRemaining}</Number>
              <Measurement>GAL</Measurement>
            </NumberContainer>
            <SupportingText>
              Remaining
            </SupportingText>
          </TextContainer>
        </Water>
      </Container>
    );
  }
}

export default Cup;
