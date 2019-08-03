import styled, { css } from 'styled-components';
import { colors, zIndexMap } from '../../utils';

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 22px 22px 0 0;
  height: 100%;
  left: 0%;
  position: absolute;
  transform: translateY(100vh);
  transition: transform 0.3s ease-in-out;
  top: 20px;
  width: 100%;
  z-index: ${zIndexMap.modal};

  ${props => props.isVisible && css`
    transform: translateY(0vh);
  `}
`;

export const CenteringContainer = styled.div`
  height: calc(100% - 90px);
`;