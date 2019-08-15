import styled from 'styled-components';
import { colors } from '../../../utils';

export const Heading = styled.h3`
  color: ${colors.blackRock};
  font-weight: normal;
  font-size: 16px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const EntryContainer = styled.div`
  height: 300px;
`;