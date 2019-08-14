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
      isChecked: (value === true || value === false ? value : !isChecked)
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
          onClick={this.handleChange.bind(this)}
        >
          {isChecked ? (
            <Label
            >
              {labels.first}
            </Label>
          ) : (
            <Label
              right
            >
              {labels.last}
            </Label>
          )}
          <Checkbox 
            type="Checkbox" 
            isChecked={isChecked}
            onChange={this.handleChange.bind(this)} 
          />
        </CheckboxLabel>
      </Container>
    );
  }
}

export default Toggle;
