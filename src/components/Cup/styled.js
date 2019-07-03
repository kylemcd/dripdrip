import styled, {keyframes} from 'styled-components';
import { colors } from '../../utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  height: 100%;
`;

export const wave = keyframes`
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-5px);
  }
`;

export const waveFlip = keyframes`
  0% {
    transform: translateY(-5px) scaleX(-1);
  }
  50% {
    transform: translateY(0px) scaleX(-1);
  }
  100% {
    transform: translateY(-5px) scaleX(-1);
  }
`;

export const Water = styled.div`
  align-items: center;
  background-color: ${colors.summerSky};
  display: flex;
  height: ${props => props.percentageRemaining}%;
  justify-content: center;
  position: relative;
  transition: 0.5s ease-in-out;
  width: 100%;
  z-index: 2;

  &:before {
    content: '';
    animation: ${wave} 3s infinite ease;
    background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg width='100px' height='21px' viewBox='0 0 100 21' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com --%3E%3Ctitle%3EPath%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='waves' fill='%232B90D9' fill-rule='nonzero'%3E%3Cpath d='M0,21 L0,3 C20,6.33333333 38.3333333,6.33333333 55,3 C71.6666667,-0.333333333 86.6666667,-0.666666667 100,2 L100,21 L0,21 Z' id='Path'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 102%;
    left: 0;
    top: -6vw;
    position: absolute;
    height: 200px;
    width: 100%;
    z-index: -1;
  }

  &:after {
    content: '';
    animation: ${waveFlip} 5s infinite ease;
    background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg width='100px' height='21px' viewBox='0 0 100 21' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com --%3E%3Ctitle%3EPath%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='waves' fill='%232B90D9' fill-rule='nonzero'%3E%3Cpath d='M0,21 L0,3 C20,6.33333333 38.3333333,6.33333333 55,3 C71.6666667,-0.333333333 86.6666667,-0.666666667 100,2 L100,21 L0,21 Z' id='Path'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 102%;
    left: 0;
    top: -6vw;
    position: absolute;
    transform: scaleX(-1);
    opacity: 0.8;
    height: 200px;
    width: 100%;
    z-index: -1;
  }
`;

export const TextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const NumberContainer = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Number = styled.h1`
  color: ${colors.white};
  font-size: 72px;
  margin: 0;
`;
 
export const Measurement = styled.h2`
  color: ${colors.solitude};
  font-size: 24px;
  margin: 0;
`;

export const SupportingText = styled.h3`
  color: ${colors.solitude};
  font-size: 14px;
  margin: 0;
  text-transform: uppercase;
`;