import styled, { css } from 'styled-components';
import { colors } from '../../utils';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Checkbox = styled.input`
  display: none;
`;

export const CheckboxLabel = styled.label`
  align-items: center;
  display: flex;
  background-color: ${colors.solitude};
  border-radius: 12px;
  cursor: pointer;
  height: 15px;
  margin-bottom: 8px;
  padding: 8px;
  position: relative;
  width: 100px;

  &:after {
    content: '';
    background-color: white;
    border-radius: 50%;
    display: block;
    height: 20px;
    transition: 0.2s ease-in-out;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
  }

  ${props => props.isChecked && css`
    &:after {
      transform: translateX(82px) translateY(-50%);
    }
  `}
`;

export const Label = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  text-align: left;
  width: 100%;

  &:focus {
    outline: none;
  }

  ${props => props.right && css`
    text-align: right;
  `}
`;
