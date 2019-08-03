import React, { Component } from 'react';
import Div100vh from 'react-div-100vh'

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
          <Div100vh>
            <PageContainer>
              <Cup/>
              <Dock/>
            </PageContainer>
          </Div100vh>
        </WaterProvider>
      </DockProvider>
    );
  }
}

export default Dashboard;
