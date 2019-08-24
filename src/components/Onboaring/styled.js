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
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 16px); 
`;

export const Content = styled.div`
  margin: 48px 16px;
`;

export const Title = styled.h2`
  color: ${colors.blackRock};
  font-size: 18px;
`;

export const Select = styled.select`
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='270' height='240'%3E%3Cpath d='M5,5H265L135,230' fill='%23282C37' /%3E%3C/svg%3E");
  background-position: 90% 50%;
  background-repeat: no-repeat;
  background-size: 6px 6px;
  background-color: transparent;
  border: 1px solid ${colors.solitude};
  font-size: 14px;
  padding: 8px 28px 8px 8px;
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

  ${props => props.blue && css`
    border-color: ${colors.summerSky};
    color: ${colors.summerSky};
  `};
`;

export const Paragraph = styled.p`
  color: ${colors.blackRock};
  font-size: 14px;
  line-height: 18px;
`;