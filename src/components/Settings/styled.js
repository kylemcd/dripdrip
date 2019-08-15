import styled, { keyframes, css } from 'styled-components';
import { colors, zIndexMap } from '../../utils';

export const SettingsButton = styled.button`
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg style='enable-background:new 0 0 24 24;' version='1.1' viewBox='0 0 24 24' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='info'/%3E%3Cg id='icons'%3E%3Cpath fill='%239BAEC0' d='M22.2,14.4L21,13.7c-1.3-0.8-1.3-2.7,0-3.5l1.2-0.7c1-0.6,1.3-1.8,0.7-2.7l-1-1.7c-0.6-1-1.8-1.3-2.7-0.7 L18,5.1c-1.3,0.8-3-0.2-3-1.7V2c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2v1.3c0,1.5-1.7,2.5-3,1.7L4.8,4.4c-1-0.6-2.2-0.2-2.7,0.7 l-1,1.7C0.6,7.8,0.9,9,1.8,9.6L3,10.3C4.3,11,4.3,13,3,13.7l-1.2,0.7c-1,0.6-1.3,1.8-0.7,2.7l1,1.7c0.6,1,1.8,1.3,2.7,0.7L6,18.9 c1.3-0.8,3,0.2,3,1.7V22c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-1.3c0-1.5,1.7-2.5,3-1.7l1.2,0.7c1,0.6,2.2,0.2,2.7-0.7l1-1.7 C23.4,16.2,23.1,15,22.2,14.4z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z' id='settings'/%3E%3C/g%3E%3C/svg%3E");
  background-color: transparent;
  background-size: 100%;
  border: none;
  height: 30px;
  opacity: 0.9;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 30px;
  z-index: ${zIndexMap.settingsButton};

  &:hover,
  &:focus {
    opacity: 1;
    outline: none;
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Modal = styled.div`
  animation: ${FadeIn} 0.4s;
  background-color: white;
  border-radius: 12px;
  display: none;
  margin: 8px;
  height: calc(100% - 16px);
  left: 0;
  position: fixed;
  top: 0;
  width: calc(100% - 16px);
  z-index: ${zIndexMap.settingsModal};

  ${props => props.isOpen && css`
    display: flex;
  `}
`;

export const CloseButton = styled.button`
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 301.076 301.076' style='enable-background:new 0 0 301.076 301.076;' xml:space='preserve'%3E%3Cg%3E%3Cpath style='fill:282C37;' d='M98.159,150.539L10.858,237.84c-14.461,14.469-14.461,37.936,0,52.397 c14.453,14.453,37.92,14.453,52.372,0l87.309-87.317l87.293,87.317c14.469,14.453,37.92,14.453,52.381,0 c14.477-14.469,14.461-37.936,0-52.397l-87.293-87.301l87.301-87.285c14.469-14.477,14.469-37.936,0-52.397 c-14.469-14.477-37.92-14.477-52.389,0l-87.293,87.309L63.23,10.858c-14.453-14.477-37.92-14.477-52.381,0 c-14.461,14.461-14.461,37.895,0,52.364L98.159,150.539z'/%3E%3C/g%3E%3C/svg%3E");
  background-color: transparent;
  background-size: 100%;
  border: none;
  cursor: pointer;
  height: 18px;
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

export const Container = styled.div`
  margin-top: 50px;
  padding: 0 24px;
`;

export const Select = styled.select`
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='270' height='240'%3E%3Cpath d='M5,5H265L135,230' fill='%23282C37' /%3E%3C/svg%3E");
  background-position: 93% 50%;
  background-repeat: no-repeat;
  background-size: 6px 6px;
  background-color: transparent;
  border: 1px solid ${colors.solitude};
  font-size: 14px;
  padding: 8px 24px 8px 8px;
  text-align: left;

  &:hover,
  &:focus {
    border-color: ${colors.summerSky};
    outline: none;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 0.5em;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5em;
`;

export const Field = styled.input`
  appearance: none;
  border: 1px solid ${colors.solitude};
  font-size: 14px;
  padding: 8px;
  text-align: left;
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

  ${props => props.green && css`
    background-color: #5CAB7D;
    border-bottom: 2px solid #5A9367;
  `};

  ${props => props.red && css`
    border-color: #f15c5c;
    color: #f15c5c;
  `};

  ${props => props.yellow && css`
    background-color: #fdc23e;
    border-bottom: 2px solid #f9a11b;
    color: ${colors.blackRock};
  `};
`;

export const Subtext = styled.span`
  color: ${colors.blackRock};
  display: block;
  font-size: 12px;
  font-style: italic;
  margin-top: 0.5em;
`;