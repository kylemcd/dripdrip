import React, { Component } from 'react';

import {
  Timer,
  TimeEntry,
  Toggle
} from '../../../components';

import { 
  WaterContext
} from '../../../context';

import {
  Container,
  EntryContainer
} from './styled';

class ShowerPanel extends Component {

  state = {
    isChecked: false
  }

  subtractFromTotal = (time) => {
    const { updateWaterAmount } = this.context;

    const gallonsPerSecond = 0.035;

    const waterUsage = time * gallonsPerSecond;

    updateWaterAmount(waterUsage);
  }

  handleToggleChange = (isChecked) => {
    this.setState({
      isChecked
    })
  }

  render() {
    const { isChecked } = this.state;
    return (
      <Container>
        <Toggle
          onChange={this.handleToggleChange.bind(this)}
          labels={{first: 'Timer', last: 'Manual'}}
        />
        <EntryContainer>
          {!isChecked ? (
            <Timer 
              startTime={0}
              onSubtract={this.subtractFromTotal.bind(this)}
            />
          ) : (
            <TimeEntry
              onSubtract={this.subtractFromTotal.bind(this)}
            />
          )}
         </EntryContainer>
      </Container>
    );
  }
}

ShowerPanel.contextType = WaterContext;

export default ShowerPanel;
