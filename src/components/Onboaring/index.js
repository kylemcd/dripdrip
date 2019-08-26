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

  state = {
    stateWaterTotal: 50
  }

  changeMeasurement = (event) => {
    const value = event.target.value;
    const { changeMeasurement } = this.context;

    changeMeasurement(value);
  }

  updateTotalAmount = (event) => {
    let value = event.target.value;
    const { updateTotalAmount, measurement } = this.context;
    
    updateTotalAmount(value);
  } 

  start = () => {
    const { onClose } = this.props;
    const { reset } = this.context;

    reset();
    onClose();
  }

  updateWaterTotal = (event) => {
    const value = event.target.value;

    this.setState({
      stateWaterTotal: value
    })
  }

  render() {
    const { measurement } = this.context;
    const { stateWaterTotal } = this.state;
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
              <Field type="number" value={stateWaterTotal} onChange={this.updateWaterTotal.bind(this)} onBlur={this.updateTotalAmount.bind(this)} step="0.01"/>
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
