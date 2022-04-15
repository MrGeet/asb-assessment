import styled from 'styled-components';
import { ISpinner } from '../components/Spinner';

export const SpinnerWrapper = styled.div<ISpinner>`
  width: ${({ size }) => (size ? `${size}rem` : '2rem')};
  height: ${({ size }) => (size ? `${size}rem` : '2rem')};
  position: relative;
  margin: auto;

  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.5rem solid transparent;
    border-top-color: ${({ color }) => (color ? color : 'black')};
    border-radius: 50%;
    animation: spinnerOne 1.2s linear infinite;
  }

  > div:nth-child(2) {
    border: 0.5rem solid transparent;
    border-bottom-color: ${({ color }) => (color ? color : 'black')};
    animation: spinnerTwo 1.2s linear infinite;
  }

  @keyframes spinnerOne {
    0% {
      transform: rotate(0deg);
      border-width: 0.5rem;
    }
    50% {
      transform: rotate(180deg);
      border-width: 0.1rem;
    }
    100% {
      transform: rotate(360deg);
      border-width: 0.5rem;
    }
  }
  @keyframes spinnerTwo {
    0% {
      transform: rotate(0deg);
      border-width: 0.1rem;
    }
    50% {
      transform: rotate(180deg);
      border-width: 0.5rem;
    }
    100% {
      transform: rotate(360deg);
      border-width: 0.1rem;
    }
  }
`;
