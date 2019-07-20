import React, { Component } from 'react';

import {
  Container,
  Time,
  ButtonContainer,
  TimeContainer,
  TimeIndicator,
  TimeIndicatorContainer,
  TimerButton,
  SubtractButton
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

  updateTime = () => {
    const { time : prevTime } = this.state;

    const time = prevTime + 1

    this.setState({
      time
    });
  }

  startTimer = () => {
    this.interval = this.createInterval();
  }

  stopTimer = () => {
    clearInterval(this.interval);
  }

  clearTimer = () => {
    clearInterval(this.interval);

    this.setState({
      time: 0
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
    const { time } = this.state;
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
          <TimerButton green onClick={() => this.startTimer()}>Start</TimerButton>
          <TimerButton red onClick={() => this.stopTimer()}>Stop</TimerButton>
          <TimerButton yellow onClick={() => this.clearTimer()}>Clear</TimerButton>
        </ButtonContainer>
        <SubtractButton onClick={() => this.subtractFromTotal()}>Add to Water Usage</SubtractButton>
      </Container>
    );
  }
}

Timer.contextType = DockContext;

export default Timer;
