import styled from 'styled-components';
import { colors } from '../../utils';

export const Container = styled.div`

`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
  max-width: 100vw;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const Field = styled.input`
  appearance: none;
  color: ${colors.blackRock};
  border: 1px solid ${colors.solitude};
  border-radius: 22px;
  font-weight: bold;
  height: 105px;
  font-size: 72px;
  margin-bottom: 8px;
  padding: 8px;
  text-align: center;
  width: 105px;
`;

export const Label = styled.label`
  color: ${colors.blackRock};
  font-size: 14px;
  text-transform: uppercase;
`;

export const FieldGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Colon = styled.div`
  align-items: center;
  color: ${colors.blackRock};
  display: flex;
  font-size: 72px;
  margin: 0 4px;
  height: 105px;
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