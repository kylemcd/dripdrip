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

  state = {
    total: ''
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      total: value
    })
  }

  subtractFromTotal = () => {
    const { onSubtract, measurement } = this.props;
    const { closeModal } = this.context;
    const { total : prevTotal } = this.state;

    let total = prevTotal;
    
    if(measurement === 'liters'){
      total = total * 0.264172;
    }
    
    onSubtract(total);
    closeModal();

    this.setState({
      total
    })
  }

  render() {
    const { measurement } = this.props;
    const { total } = this.state;
    return (
      <Container>
        <Label htmlFor="amount">
          Enter amount of {measurement === 'gallons' ? 'gallons' : 'liters'} used
        </Label>
        <Field type="number" name="amount" step="0.01"
          value={total}
          onChange={this.handleChange.bind(this)}
        />
        {total && (
          <SubtractButton onClick={() => this.subtractFromTotal()}>Add to Water Usage</SubtractButton>
        )}
      </Container>
    );
  }
}

CustomEntry.contextType = DockContext;

export default CustomEntry;
