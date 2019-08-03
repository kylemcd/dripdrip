import styled from 'styled-components';
import { colors, zIndexMap } from '../../utils';

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
  flex-basis: 100%;
  justify-content: space-around;
  height: calc(90px - 2em);
  max-width: 800px;
  padding: 1em 0;
  position: relative;
  z-index: ${zIndexMap.dock};
`;

export const DockItem = styled.button`
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  &:hover, &:focus {
    outline: none;
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Label = styled.span`
  color: ${colors.blackRock};
  display: block;
  font-size: 11px;
  font-weight: 700;
  margin-top: 0.5em;
  text-transform: uppercase;
`;