import React, { Component } from 'react';

import {
  Timer,
  Toggle,
  TimeEntry
} from '../../../components';

import {
  WaterContext
} from '../../../context';

import {
  Container
} from './styled';

class SinkPanel extends Component {

  state = {
    isChecked: false
  }

  subtractFromTotal = (time) => {
    const { updateWaterAmount } = this.context;

    const gallonsPerSecond = 0.036;

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
          labels={{first: 'Manual', last: 'Timer'}}
        />
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
      </Container>
    );
  }
}

SinkPanel.contextType = WaterContext;

export default SinkPanel;
