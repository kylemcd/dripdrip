import React, { Component } from 'react';
import Div100vh from 'react-div-100vh'

import { 
  PageContainer
} from './styled';

import {
  Cup,
  Dock,
  Settings,
  ResetModal,
  Onboaring
} from '../../components';

import {
  WaterProvider,
  DockProvider
} from '../../context';

class Dashboard extends Component {

  state = {
    isResetVisible: false,
    isOnboardVisible: false
  }

  componentDidMount = () => {
    this.userFlow();
  }

  userFlow = () => {
    const lastDateLocalStorage = localStorage.getItem('lastDate');
    const DATE = new Date();
    const currentDate = `${DATE.getMonth()},${DATE.getDate()},${DATE.getFullYear()}`

    if(!lastDateLocalStorage){
      this.setState({
        isOnboardVisible: true
      })

      localStorage.setItem('lastDate', currentDate);
    } else {

      const currentDateObj = this.parseDate(currentDate);
      const lastDateObj = this.parseDate(lastDateLocalStorage);

      const dateLogic = (
        currentDateObj.year > lastDateObj.year ||
        currentDateObj.month > lastDateObj.month ||
        currentDateObj.day > lastDateObj.day
      );

      if(dateLogic){
        this.setState({
          isResetVisible: true
        })
      }
    }
  }

  parseDate = (date) => {
    const dateArr = date.split(',');
    const dateObj = {
      month: dateArr[0],
      day: dateArr[1],
      year: dateArr[2]
    };
    return dateObj;
  }

  closeResetModal = () => {
    this.setState({
      isResetVisible: false
    })
  }

  closeOnboardModal = () => {
    this.setState({
      isOnboardVisible: false
    })
  }

  render() {
    const { isResetVisible, isOnboardVisible } = this.state;
    return (
      <DockProvider>
        <WaterProvider>
          <Div100vh>
            <PageContainer>
              {isOnboardVisible && <Onboaring onClose={this.closeOnboardModal.bind(this)}/>}
              {isResetVisible && <ResetModal onClose={this.closeResetModal.bind(this)}/>}
              <Settings/>
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
