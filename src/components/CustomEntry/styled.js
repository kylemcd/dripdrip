import styled, { keyframes } from 'styled-components';
import { colors } from '../../utils';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Field = styled.input`
  appearance: none;
  border: 1px solid ${colors.solitude};
  border-radius: 12px;
  color: ${colors.blackRock};
  font-size: 24px;
  padding: 8px;
  text-align: center;

  &:hover,
  &:focus {
    border-color: ${colors.summerSky};
    outline: none;
  }
`;

export const Label = styled.label`
  margin-bottom: 1em;
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