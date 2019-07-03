import React, { Component } from 'react';

import { 
  Container,
  DockContainer,
  DockItem
} from './styled';

class Dock extends Component {
  render() {
    return (
      <Container>
        <DockContainer>
          <DockItem>
            Shower
          </DockItem>
          <DockItem>
            Shower
          </DockItem>
          <DockItem>
            Shower
          </DockItem>
          <DockItem>
            Shower
          </DockItem>
        </DockContainer>
      </Container>
    );
  }
}

export default Dock;
