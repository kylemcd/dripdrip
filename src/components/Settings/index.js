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
  FormGroup
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

  render() {
    const { isOpen } = this.state;
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
              <Select name="measurement" onChange={this.changeMeasurement.bind(this)}>
                <option value="gallons" default>Gallons</option>
                <option value="liters">Liters</option>
              </Select>
            </FormGroup>
          </Container>
        </Modal>
      </Fragment>
    );
  }
}

Settings.contextType = WaterContext;

export default Settings;
