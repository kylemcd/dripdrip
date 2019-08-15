import React, { Component } from 'react';

import {
  CustomEntry
} from '../../../components';

import {
  Container
} from './styled';

import {
  WaterContext
} from '../../../context';

export class CustomPanel extends Component {

  subtractFromTotal = (waterUsage) => {
    const  { updateWaterAmount } = this.context;

    updateWaterAmount(waterUsage);
  }

  render() {
    const { measurement } = this.context;
    return (
      <Container>
        <CustomEntry
          measurement={measurement}
          onSubtract={this.subtractFromTotal.bind(this)}
        />
      </Container>
    );
  }
}

CustomPanel.contextType = WaterContext;

export default CustomPanel;
