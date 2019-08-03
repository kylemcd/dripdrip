import styled, { css } from 'styled-components';
import { colors } from '../../utils';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const CountContainer = styled.div`
  color: ${colors.blackRock};
  font-size: 72px;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;

export const CircleButton = styled.button`
  align-items: center;
  border-radius: 50%;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;

  ${props => props.green && css`
    background-color: #5CAB7D;
  `}

  ${props => props.red && css`
    background-color: #EC6A5C;
    margin-right: 2rem;
  `}
`;

export const SubtractButton = styled.button`
  background-color: ${colors.summerSky};
  border: none;
  border-radius: 8px;
  color: ${colors.white};
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  padding: 8px 16px;
  transition: background-color 0.2s ease-in-out;

  &:hover, &:focus {
    opacity: 0.8;
    outline: none;
  }
`;