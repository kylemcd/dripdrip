import React, { Component } from 'react';

import {
  Container,
  ModalContainer,
  Content,
  Title,
  FormGroup,
  Select,
  Label,
  Field,
  Button
} from './styled';

import {
  WaterContext
} from '../../context';

export class Onboarding extends Component {

  changeMeasurement = (event) => {
    const value = event.target.value;
    const { changeMeasurement } = this.context;

    changeMeasurement(value);
  }

  updateTotalAmount = (event) => {
    const value = event.target.value;
    const { updateTotalAmount } = this.context;

    updateTotalAmount(value);
  } 

  start = () => {
    const { onClose } = this.props;
    const { reset } = this.context;

    reset();
    onClose();
  }

  render() {
    const { measurement, waterTotal } = this.context;
    return (
      <Container>
        <ModalContainer>
          <Content>
            <Title>Welcome to dridrip, let's get started!</Title>
            <FormGroup>
              <Label htmlFor="measurement">
                Select your unit of measurment
              </Label>
              <Select name="measurement" value={measurement} onChange={this.changeMeasurement.bind(this)}>
                <option value="gallons" default>Gallons</option>
                <option value="liters">Liters</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="measurement">
                Choose the amount of water you want to use today
              </Label>
              <Field type="number" value={waterTotal} onChange={this.updateTotalAmount.bind(this)} step="0.01"/>
            </FormGroup>
            <Button blue onClick={this.start.bind(this)}>Let's Go!</Button>
          </Content>
        </ModalContainer>
      </Container>
    );
  }
}

Onboarding.contextType = WaterContext;

export default Onboarding;
