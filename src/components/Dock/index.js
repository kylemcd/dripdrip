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
  Modal,
  SinkPanel,
  ShowerPanel
} from '../../components';

import {  
  DockConsumer
} from '../../context';

class Dock extends Component {

  render() {
    return (
      <DockConsumer>
        {({ isModalVisible, activePanel, toggleModal }) => (
          <Container>
            <Modal isVisible={isModalVisible}>
              {activePanel === 'Shower' && <ShowerPanel/>}
              {activePanel === 'Sink' && <SinkPanel/>}
              {activePanel === 'Bottle' && 'Bottle'}
              {activePanel === 'Custom' && 'Custom'}
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
    );
  }
}

export default Dock;
