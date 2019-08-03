import React, { Component, Fragment } from 'react';

import {
  Timer
} from '../../../components';

import { 
  WaterContext
} from '../../../context';

class ShowerPanel extends Component {


  subtractFromTotal = (time) => {
    const { updateWaterAmount } = this.context;

    const gallonsPerSecond = 0.035;

    const waterUsage = time * gallonsPerSecond;

    updateWaterAmount(waterUsage);
  }

  render() {
    return (
      <Fragment>
        <Timer 
          startTime={600}
          onSubtract={this.subtractFromTotal.bind(this)}
        />
      </Fragment>
    );
  }
}

ShowerPanel.contextType = WaterContext;

export default ShowerPanel;
