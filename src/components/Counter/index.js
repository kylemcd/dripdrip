import React, { Component } from 'react';

import {
  Container,
  CountContainer,
  ButtonContainer,
  CircleButton,
  SubtractButton
} from './styled';

import {
  DockContext
} from '../../context';

class Counter extends Component {
  
  state = {
    count: 0
  }

  incrementCount = () => {
    const { count : prevCount } = this.state;

    const count = ((prevCount - 1) <= 0 ? 0 : (prevCount -1));

    this.setState({
      count
    })
  }

  decrementCount = () => {
    const { count : prevCount } = this.state;

    const count = prevCount + 1;

    this.setState({
      count
    })
  }

  subtractFromTotal = () =>{
    const { onSubtract } = this.props;
    const { count } = this.state;
    const { closeModal } = this.context;

    onSubtract(count);
    this.setState({
      count: 0
    })
    closeModal();
  }

  render() {
    const { count } = this.state
    return (
      <Container>
        <CountContainer>
          {count}
        </CountContainer>
        <ButtonContainer>
          <CircleButton
            red
            onClick={() => this.incrementCount()}
          >
            -
          </CircleButton>
          <CircleButton
            green
            onClick={() => this.decrementCount()}
          >
            +
          </CircleButton>
        </ButtonContainer>
        <SubtractButton onClick={() => this.subtractFromTotal()}>Add to Water Usage</SubtractButton>
      </Container>
    );
  }
}

Counter.contextType = DockContext;

export default Counter;
