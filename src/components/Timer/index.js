import React, { Component } from 'react';

import {
  Container,
  Time,
  ButtonContainer,
  TimeContainer,
  TimeIndicator,
  TimeIndicatorContainer,
  TimerButton,
  SubtractButton,
  ClearButton
} from './styled';

import {
  DockContext
} from '../../context';

class Timer extends Component {

  state = {
    time: this.props.startTime,
    isRunning: false,
  }

  // Declare interval out of state for easier clear
  interval = null;

  createInterval = () => {
    return setInterval(this.updateTime, 1000)
  }

  toggleTimer = () => {
    const { isRunning } = this.state;

    if(!isRunning) {
      this.interval = this.createInterval();
    
      this.setState({
        isRunning: true
      });
    } else {
      clearInterval(this.interval);

      this.setState({
        isRunning: false
      })
    }
  }

  updateTime = () => {
    const { time : prevTime } = this.state;

    const time = prevTime + 1

    this.setState({
      time
    });
  }

  clearTimer = () => {
    clearInterval(this.interval);

    this.setState({
      time: 0,
      isRunning: false
    })
  }

  printTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;

    minutes = (minutes !== 0 ? (minutes <= 9 ? '0' + minutes : minutes) : '00');
    seconds = (seconds <= 9 ? '0' + seconds : seconds)

    return `${minutes}:${seconds}`;
  }

  subtractFromTotal = () =>{
    const { onSubtract } = this.props;
    const { time } = this.state;
    const { closeModal } = this.context;

    onSubtract(time);
    this.setState({
      time: 0
    })
    closeModal();
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    const { time, isRunning } = this.state;
    return (
      <Container>
        <TimeContainer>
          <Time>
            {this.printTime(time)}
          </Time>
          <TimeIndicatorContainer>
            <TimeIndicator>
              Minutes
            </TimeIndicator>
            <TimeIndicator>
              Seconds
            </TimeIndicator>
          </TimeIndicatorContainer>
        </TimeContainer>
        <ButtonContainer>
          <TimerButton onClick={() => this.toggleTimer()} isRunning={isRunning}>
            {isRunning ? 'Stop' : 'Start' }
          </TimerButton>
          {time > 0 && (
            <ClearButton yellow onClick={() => this.clearTimer()}>Clear Time</ClearButton>
          )}
        </ButtonContainer>
        {time > 0 && (
          <SubtractButton onClick={() => this.subtractFromTotal()}>Add to Water Usage</SubtractButton>
        )}
      </Container>
    );
  }
}

Timer.contextType = DockContext;

export default Timer;
