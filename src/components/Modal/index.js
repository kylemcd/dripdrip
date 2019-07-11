import React, { Component } from 'react';

import { 
  Container
} from './styled';

class Modal extends Component {
  render() {
    const { isVisible, children } = this.props;
    return (
      <Container isVisible={isVisible}>
        {children}
      </Container>
    );
  }
}

export default Modal;
