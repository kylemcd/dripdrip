import React, { Component } from 'react';

import {
  Container,
  Field,
  Label,
  SubtractButton
} from './styled';

import {
  DockContext
} from '../../context';


export class CustomEntry extends Component {

  subtractFromTotal = () => {
    const { onSubtract, measurement } = this.props;
    const { closeModal } = this.context;
    let value = this.field.value;

    if(measurement === 'liters'){
      value = value * 0.264172;
    }

    onSubtract(value);
    closeModal();

    this.field.value = '';
  }

  render() {
    const { measurement } = this.props;
    return (
      <Container>
        <Label htmlFor="amount">
          Enter amount of {measurement === 'gallons' ? 'gallons' : 'liters'} used
        </Label>
        <Field type="text" name="amount" ref={field => this.field = field}/>
        <SubtractButton onClick={() => this.subtractFromTotal()}>Add to Water Usage</SubtractButton>
      </Container>
    );
  }
}

CustomEntry.contextType = DockContext;

export default CustomEntry;
