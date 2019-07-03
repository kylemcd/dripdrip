import styled from 'styled-components';
import { colors } from '../../utils';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5em;
  width: calc(100% - 1em);
`;

export const DockContainer = styled.div`
  align-items: center;
  background-color: ${colors.solitude};
  border-radius: 22px;
  display: flex;
  justify-content: space-around;
  height: 90px;
  max-width: 390px;
  flex-basis: 100%;
`;

export const DockItem = styled.button`

`;