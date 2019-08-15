import styled, { css, keyframes } from 'styled-components';
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
  height: calc(80px - 2em);
  max-width: 800px;
  padding: 1em 0;
  margin-bottom: 1em;
  position: relative;
  z-index: ${zIndexMap.dock};
`;

export const DockItem = styled.button`
  align-items: center;
  border: none;
  background: transparent;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 46px;
  justify-content: space-between;
  padding: 8px;
  transition: all 0.2s ease-in-out;
  width: auto;

  &:hover, &:focus {
    outline: none;
  }

  ${props => props.active && css`
    background-color: ${colors.nepal};
  `}
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 0.5em;

  svg {
    height: 30px;
    width: auto;
  }
`;

const LabelShow = keyframes`
  0% {
    display: block;
    transform: scaleX(0.4);
    opacity: 0;
    width: 0;
  }

  100% {
    opacity:
    transform: scaleX(1);
    width: 100%;
  }
`;

export const Label = styled.span`
  color: ${colors.blackRock};
  display: none;
  font-size: 11px;
  font-weight: 700;
  margin: 0 1em;
  text-transform: uppercase;
  transform-origin: left;

  ${props => props.active && css`
    animation: ${LabelShow} 0.2s;
    display: block;
  `}
`;

