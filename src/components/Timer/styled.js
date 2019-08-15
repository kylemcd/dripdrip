import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../utils';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
`;

export const TimerButton = styled.button`
  background: white;
  border: 2px solid ${colors.summerSky};
  border-radius: 50%;
  cursor: pointer;
  color: ${colors.summerSky};
  font-size: 14px;
  font-weight: bold;
  margin-right: 4px;
  padding: 8px 8px;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  height: 80px;
  width: 80px;

  &:hover, &:focus {
    opacity: 0.8;
    outline: none;
  }

  &:last-child {
    margin-right: 0;
  }

  ${props => props.isRunning && css`
    border-color: #f15c5c;
    color: #f15c5c;
  `}
`;

const ClearButtonAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scaleX(0);
  }

  100% {
    opacity: 1;
    transform: scaleX(1)
  }
`;

export const ClearButton = styled.button`
  animation: ${ClearButtonAnimation} 0.2s;
  background-color: transparent;
  border: 1px solid ${colors.blackRock};
  border-radius: 8px;
  color: ${colors.blackRock};
  font-size: 14px;
  margin-left: 1em;
  padding: 8px 16px;
  transform-origin: left;
`;

const SubtractButtonAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const SubtractButton = styled.button`
  animation: ${SubtractButtonAnimation} 0.8s;
  background-color: white;
  border: 1px solid #56A902;
  border-radius: 8px;
  color: #56A902;
  cursor: pointer;
  font-size: 16px;
  margin-top: 1.5em;
  padding: 8px 16px;
  transition: background-color 0.2s ease-in-out;

  &:hover, &:focus {
    opacity: 0.8;
    outline: none;
  }
`;