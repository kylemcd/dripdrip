import React, { Component } from 'react';

import {
  Container,
  CheckboxLabel,
  Checkbox,
  Label
} from './styled';

export class Toggle extends Component {

  state = {
    isChecked: false
  }


  handleChange = (value) => {
    const { isChecked } = this.state;
    const { onChange } = this.props;
    
    this.setState({
      isChecked: !isChecked
    })
    onChange(!isChecked)
  }

  render() {
    const { isChecked } = this.state;
    const { labels } = this.props;
    return (
      <Container>
        <CheckboxLabel
          isChecked={isChecked}
        >
          <Label active={!isChecked}>
            {labels.first}
          </Label>
          <Label active={isChecked}>
            {labels.last}
          </Label>
          <Checkbox 
            type="Checkbox" 
            isChecked={isChecked}
            value={isChecked}
            onChange={this.handleChange.bind(this)} 
          />
        </CheckboxLabel>
      </Container>
    );
  }
}

export default Toggle;
