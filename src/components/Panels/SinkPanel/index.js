import React, { Fragment, Component } from 'react';

import {
  Timer
} from '../../../components';

import {
  WaterContext
} from '../../../context';

class SinkPanel extends Component {

  subtractFromTotal = (time) => {
    const { updateWaterAmount } = this.context;

    const gallonsPerSecond = 0.036;

    const waterUsage = time * gallonsPerSecond;

    updateWaterAmount(waterUsage);
  }

  render() {
    return (
      <Fragment>
        <Timer
          startTime={0}
          onSubtract={this.subtractFromTotal.bind(this)}
        />
      </Fragment>
    );
  }
}

SinkPanel.contextType = WaterContext;

export default SinkPanel;
