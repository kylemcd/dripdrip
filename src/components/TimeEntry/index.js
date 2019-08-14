import React, { Component } from 'react';

import {
  Container,
  FieldContainer,
  ButtonContainer,
  Field,
  Label,
  FieldGroup,
  Colon,
  SubtractButton
} from './styled';

import {
  DockContext
} from '../../context';

export class TimeEntry extends Component {

  subtractFromTotal = () => {
    const { onSubtract } = this.props;
    const { closeModal } = this.context

    const time = (parseInt((this.minutes.value ? this.minutes.value : 0), 10)* 60) + parseInt((this.seconds.value ? this.seconds.value : 0), 10);
    onSubtract(time);

    closeModal();

    this.minutes.value = '';
    this.seconds.value = '';
  }

  render() {
    return (
      <Container>
        <FieldContainer>
          <FieldGroup>
            <Field type="number" name="minutes" placeholder="00"
              ref={minutes => this.minutes = minutes}
            />
            <Label htmlFor="minutes">Minutes</Label>
          </FieldGroup>
          <Colon>:</Colon>
          <FieldGroup>
            <Field type="number" name="seconds" placeholder="00" 
              ref={seconds => this.seconds = seconds}
            />
            <Label htmlFor="seconds">Seconds</Label>
          </FieldGroup>
        </FieldContainer>
        <ButtonContainer>
          <SubtractButton onClick={() => this.subtractFromTotal()}>Add to Water Usage</SubtractButton>
        </ButtonContainer>
      </Container>
    );
  }
}

TimeEntry.contextType = DockContext;

export default TimeEntry;
