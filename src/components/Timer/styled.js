import styled, { css } from 'styled-components';
import { colors } from '../../utils';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Time = styled.h1`
  color: ${colors.blackRock};
  font-size: 72px;
  margin: 0;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimeIndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TimeIndicator = styled.div`
  color: ${colors.blackRock};
  font-size: 14px;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const TimerButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 4px;
  padding: 8px 16px;
  transition: background-color 0.2s ease-in-out;

  &:hover, &:focus {
    opacity: 0.8;
    outline: none;
  }

  &:last-child {
    margin-right: 0;
  }

  ${props => props.green && css`
    background-color: #5CAB7D;
    border-bottom: 2px solid #5A9367;
  `};

  ${props => props.red && css`
    background-color: #EC6A5C;
    border-bottom: 2px solid #C65146;
  `};

  ${props => props.yellow && css`
    background-color: #fdc23e;
    border-bottom: 2px solid #f9a11b;
    color: ${colors.blackRock};
  `};
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