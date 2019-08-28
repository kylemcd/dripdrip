import React, { Fragment, Component } from 'react';

import {
  ScreenReader
} from '../../components';

import {
  SettingsButton,
  Modal,
  CloseButton,
  Container,
  Select,
  Label,
  FormGroup,
  Field,
  Button,
  Subtext,
  BuiltBy
} from './styled';

import {
  WaterContext
} from '../../context';

export class Settings extends Component {

  state = {
    isOpen: false
  }

  openModal = () => {
    this.setState({
      isOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    })
  }

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

  reset = () => {
    const { reset } = this.context;

    reset();
  }

  render() {
    const { isOpen } = this.state;
    const { measurement, waterTotal } = this.context;
    return (
      <Fragment>
        <SettingsButton onClick={this.openModal.bind(this)}>
          <ScreenReader>Settings</ScreenReader>
        </SettingsButton>

        <Modal isOpen={isOpen}>
          <CloseButton onClick={this.closeModal.bind(this)}>
            <ScreenReader>Close</ScreenReader>
          </CloseButton>
          <Container>
            <FormGroup>
              <Label htmlFor="measurement">
                Measurement Value
              </Label>
              <Select name="measurement" value={measurement} onChange={this.changeMeasurement.bind(this)}>
                <option value="gallons" default>Gallons</option>
                <option value="liters">Liters</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="measurement">
                Starting Water Total
              </Label>
              <Field type="number" value={waterTotal} onChange={this.updateTotalAmount.bind(this)} step="0.01"/>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="measurement">
                Reset to a new day
              </Label>
              <Button red onClick={this.reset.bind(this)}>
                Reset Data
              </Button>
              <Subtext>
                Warning, no going back after you click this.
              </Subtext>
            </FormGroup>
            <BuiltBy>
              Built by <a href="https://twitter.com/designbykyle">@designbykyle</a>
            </BuiltBy>
          </Container>
        </Modal>
      </Fragment>
    );
  }
}

Settings.contextType = WaterContext;

export default Settings;
