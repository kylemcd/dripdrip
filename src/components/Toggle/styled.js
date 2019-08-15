import styled, { css } from 'styled-components';
import { colors } from '../../utils';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  display: none;
`;

export const CheckboxLabel = styled.label`
  align-items: center;
  display: flex;
  background-color: transparent;
  border-radius: 12px;
  cursor: pointer;
  height: 30px;
  margin-bottom: 1.5em;
  padding: 8px;
  position: relative;
  width: 100%;
  z-index: 5;

  &:after {
    content: '';
    border: 1px solid ${colors.summerSky};
    border-radius: 12px;
    display: block;
    height: 30px;
    transition: 0.2s ease-in-out;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
  }

  ${props => props.isChecked && css`
    &:after {
      transform: translateX(100%) translateX(-16px) translateY(-50%);
    }
  `}
`;

export const Label = styled.span`
  appearance: none;
  background: transparent;
  border: none;
  color: ${colors.nepal};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  width: 120px;

  &:focus {
    outline: none;
  }

  ${props => props.active && css`
    color: ${colors.summerSky};
  `}
`;
