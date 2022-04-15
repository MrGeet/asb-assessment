import React from 'react';
import { SpinnerWrapper } from '../styledComponents/SpinnerStyled';

export interface ISpinner {
  size?: number;
  color?: string;
}

export const Spinner: React.FC<ISpinner> = ({ size, color }) => {
  return (
    <SpinnerWrapper size={size} color={color}>
      <div />
      <div />
    </SpinnerWrapper>
  );
};
