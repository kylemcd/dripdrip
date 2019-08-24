import React, { Component } from 'react';

import {
  Container,
  ModalContainer,
  CloseButton,
  Content,
  Title,
  ButtonContainer,
  Button
} from './styled';

import {
  WaterContext
} from '../../context';

export class ResetModal extends Component {

  reset = () => {
    const { reset } = this.context;
    const { onClose } = this.props;

    const DATE = new Date();
    const currentDate = `${DATE.getMonth()},${DATE.getDate()},${DATE.getFullYear()}`;
    localStorage.setItem('lastDate', currentDate);

    onClose();
    reset();
  }

  render() {
    const { onClose } = this.props;
    return (
      <Container>
        <ModalContainer>
          <CloseButton onClick={() => onClose()} />
          <Content>
            <Title>
              It looks like it's a new day, if you'd like, you can reset your water total!
            </Title>
            <ButtonContainer>
              <Button red onClick={this.reset.bind(this)}>Reset</Button>
              <Button black onClick={() => onClose()}>Close</Button>
            </ButtonContainer>
          </Content>
        </ModalContainer>
      </Container>
    );
  }
}

ResetModal.contextType = WaterContext;

export default ResetModal;
