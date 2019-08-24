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
  Button,
  Paragraph
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
            <Title>Welcome to dripdrip, let's get started!</Title>
            <Paragraph>
              For the best experience, add dripdrip to your homescreen!
            </Paragraph>
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
                Choose the amount of water you want to use today.
                {measurement === 'gallons' ? (
                  ' The average person uses between 80-100 gallons per day. Can you beat that?'
                ): (
                  ' The average person uses between 300-375 liters per day. Can you beat that?'
                )}
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
