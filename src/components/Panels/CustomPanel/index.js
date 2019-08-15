import React, { Component } from 'react';

import {
  CustomEntry
} from '../../../components';

import {
  Container,
  EntryContainer
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
        <EntryContainer>
          <CustomEntry
            measurement={measurement}
            onSubtract={this.subtractFromTotal.bind(this)}
          />
        </EntryContainer>
      </Container>
    );
  }
}

CustomPanel.contextType = WaterContext;

export default CustomPanel;
