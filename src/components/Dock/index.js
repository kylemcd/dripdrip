import React, { Component } from 'react';

import { 
  Container,
  DockContainer,
  DockItem,
  IconContainer,
  Label
} from './styled';

import {
  Bottle,
  Droplet,
  Shower,
  Sink
} from '../../icons';

import { 
  Modal
} from '../../components';

import { 
  DockProvider, 
  DockConsumer
} from '../../context/DockContext';

class Dock extends Component {

  render() {
    return (
      <DockProvider>
        <DockConsumer>
          {({ isModalVisible, activePanel, toggleModal }) => (
            <Container>
              <Modal isVisible={isModalVisible}>
                {activePanel}
              </Modal>
              <DockContainer>
                <DockItem onClick={() =>  toggleModal({
                    isModalVisible: !isModalVisible, 
                    activePanel: 'Shower'
                  })}>
                  <IconContainer>
                    <Shower/>
                  </IconContainer>
                  <Label>
                    Shower
                  </Label>
                </DockItem>
                <DockItem onClick={() =>  toggleModal({
                    isModalVisible: !isModalVisible, 
                    activePanel: 'Sink'
                  })}>
                  <IconContainer>
                    <Sink/>
                  </IconContainer>
                  <Label>
                    Sink
                  </Label>
                </DockItem>
                <DockItem onClick={() =>  toggleModal({
                    isModalVisible: !isModalVisible, 
                    activePanel: 'Bottle'
                  })}>
                  <IconContainer>
                    <Bottle/>
                  </IconContainer>
                  <Label>
                    Bottle
                  </Label>
                </DockItem>
                <DockItem onClick={() =>  toggleModal({
                    isModalVisible: !isModalVisible, 
                    activePanel: 'Custom'
                  })}>
                  <IconContainer>
                    <Droplet/>
                  </IconContainer>
                  <Label>
                    Custom
                  </Label>
                </DockItem>
              </DockContainer>
            </Container>
          )}
        </DockConsumer>
      </DockProvider>
    );
  }
}

export default Dock;
