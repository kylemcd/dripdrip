import React, { Component } from 'react';

import {
  Container,
  FieldContainer,
  ButtonContainer,
  Field,
  Label,
  FieldGroup,
  Colon,
  SubtractButton
} from './styled';

import {
  DockContext
} from '../../context';

export class TimeEntry extends Component {

  state = {
    minutes: '',
    seconds: ''
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    
    if(name === 'minutes'){
      this.setState({
        minutes: parseInt(value, 10)
      })
    }

    if(name === 'seconds'){
      this.setState({
        seconds: parseInt(value, 10)
      })
    }
  }

  subtractFromTotal = () => {
    const { onSubtract } = this.props;
    const { closeModal } = this.context;
    const { minutes, seconds } = this.state;

    const time = (parseInt((minutes ? minutes : 0), 10)* 60) + parseInt((seconds ? seconds : 0), 10);
    onSubtract(time);

    closeModal();

    this.setState({
      minutes: '',
      seconds: ''
    })
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <Container>
        <FieldContainer>
          <FieldGroup>
            <Field type="number" name="minutes" placeholder="00"
              onChange={this.handleChange.bind(this)}
              value={minutes}
            />
            <Label htmlFor="minutes">Minutes</Label>
          </FieldGroup>
          <Colon>:</Colon>
          <FieldGroup>
            <Field type="number" name="seconds" placeholder="00" 
              onChange={this.handleChange.bind(this)}
              value={seconds}
            />
            <Label htmlFor="seconds">Seconds</Label>
          </FieldGroup>
        </FieldContainer>
        <ButtonContainer>
          {(minutes || seconds) && (
            <SubtractButton onClick={() => this.subtractFromTotal()}>Add to Water Usage</SubtractButton>
          )}
        </ButtonContainer>
      </Container>
    );
  }
}

TimeEntry.contextType = DockContext;

export default TimeEntry;
