import React, { Component } from 'react';

import { 
  PageContainer
} from './styled';

import {
  Cup,
  Dock
} from '../../components';

class Dashboard extends Component {
  render() {
    return (
      <PageContainer>
        <Cup/>
        <Dock/>
      </PageContainer>
    );
  }
}

export default Dashboard;
