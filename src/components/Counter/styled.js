import styled, { css, keyframes } from 'styled-components';
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
  margin-top: 1.5em;
`;

export const CircleButton = styled.button`
  background: white;
  border: 2px solid ${colors.summerSky};
  border-radius: 50%;
  cursor: pointer;
  color: ${colors.summerSky};
  font-size: 36px;
  font-weight: bold;
  padding: 8px 8px;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  height: 80px;
  width: 80px;

  &:hover, &:focus {
    opacity: 0.8;
    outline: none;
  }

  ${props => props.red && css`
    border-color: #f15c5c;
    color: #f15c5c;
    margin-right: 0.5em;
  `}
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