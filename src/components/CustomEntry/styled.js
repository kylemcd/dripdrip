import styled from 'styled-components';
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
`;

export const Label = styled.label`
  margin-bottom: 4px;
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