import React, { Component } from 'react';

import { 
  Container,
  CenteringContainer
} from './styled';

class Modal extends Component {
  render() {
    const { isVisible, children } = this.props;
    return (
      <Container isVisible={isVisible}>
        <CenteringContainer>
          {children}
        </CenteringContainer>
      </Container>
    );
  }
}

export default Modal;
