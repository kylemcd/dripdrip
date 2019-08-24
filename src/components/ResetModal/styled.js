import styled, { css } from 'styled-components';
import { colors, zIndexMap } from '../../utils';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: calc(100% - 16px);
  position: fixed;
  right: 0;
  top: 0;
  padding: 8px;
  width: calc(100% - 16px); 
  z-index: ${zIndexMap.resetModal};
`;

export const ModalContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 16px); 
`;

export const CloseButton = styled.button`
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 301.076 301.076' style='enable-background:new 0 0 301.076 301.076;' xml:space='preserve'%3E%3Cg%3E%3Cpath style='fill:282C37;' d='M98.159,150.539L10.858,237.84c-14.461,14.469-14.461,37.936,0,52.397 c14.453,14.453,37.92,14.453,52.372,0l87.309-87.317l87.293,87.317c14.469,14.453,37.92,14.453,52.381,0 c14.477-14.469,14.461-37.936,0-52.397l-87.293-87.301l87.301-87.285c14.469-14.477,14.469-37.936,0-52.397 c-14.469-14.477-37.92-14.477-52.389,0l-87.293,87.309L63.23,10.858c-14.453-14.477-37.92-14.477-52.381,0 c-14.461,14.461-14.461,37.895,0,52.364L98.159,150.539z'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 100%;
  border: none;
  cursor: pointer;
  height: 22px;
  opacity: 0.9;
  position: absolute;
  right: 1em;
  top: 1em;
  width: 18px;

  &:focus,
  &:hover {
    outline: none;
  }
`;

export const Content = styled.div`
  margin: 48px 16px;
`;

export const Title = styled.h2`
  color: ${colors.blackRock};
  font-size: 18px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  text-align: center;

  & > button:first-child {
    margin-right: 4px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${colors.blackRock};
  border-radius: 8px;
  color: ${colors.blackRock};
  font-size: 14px;
  padding: 8px 16px;

  &:hover, &:focus {
    opacity: 0.8;
    outline: none;
  }

  &:last-child {
    margin-right: 0;
  }

  ${props => props.black && css`
    border-color: ${colors.blackRock};
    color: 2px solid ${colors.blackRock};
  `};

  ${props => props.red && css`
    border-color: #f15c5c;
    color: #f15c5c;
  `};
`;