import React, { Component } from 'react';

import { 
  PageContainer
} from './styled';

import {
  Cup,
  Dock
} from '../../components';

import {
  WaterProvider,
  DockProvider
} from '../../context';

class Dashboard extends Component {
  render() {
    return (
      <DockProvider>
        <WaterProvider>
          <PageContainer>
            <Cup/>
            <Dock/>
          </PageContainer>
        </WaterProvider>
      </DockProvider>
    );
  }
}

export default Dashboard;
