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
  ShowerPanel,
  BottlePanel,
  CustomPanel
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
              {activePanel === 'Bottle' && <BottlePanel/>}
              {activePanel === 'Custom' && <CustomPanel/>}
            </Modal>
            <DockContainer>
              <DockItem 
                active={activePanel === 'Shower' && isModalVisible}
                onClick={() =>  toggleModal({
                  isModalVisible: !isModalVisible, 
                  activePanel: 'Shower'
                })}>
                <IconContainer>
                  <Shower/>
                </IconContainer>
                <Label active={activePanel === 'Shower' && isModalVisible}>
                  Shower
                </Label>
              </DockItem>
              <DockItem 
                active={activePanel === 'Sink' && isModalVisible}
                onClick={() =>  toggleModal({
                  isModalVisible: !isModalVisible, 
                  activePanel: 'Sink'
                })}>
                <IconContainer>
                  <Sink/>
                </IconContainer>
                <Label active={activePanel === 'Sink' && isModalVisible}>
                  Sink
                </Label>
              </DockItem>
              <DockItem 
                active={activePanel === 'Bottle' && isModalVisible}
                onClick={() =>  toggleModal({
                  isModalVisible: !isModalVisible, 
                  activePanel: 'Bottle'
                })}>
                <IconContainer>
                  <Bottle/>
                </IconContainer>
                <Label active={activePanel === 'Bottle' && isModalVisible}>
                  Bottle
                </Label>
              </DockItem>
              <DockItem 
                active={activePanel === 'Custom' && isModalVisible}
                onClick={() =>  toggleModal({
                  isModalVisible: !isModalVisible, 
                  activePanel: 'Custom'
                })}>
                <IconContainer>
                  <Droplet/>
                </IconContainer>
                <Label active={activePanel === 'Custom' && isModalVisible}>
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
