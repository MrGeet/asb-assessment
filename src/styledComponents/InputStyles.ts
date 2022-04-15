import styled from 'styled-components';

export interface IInputStyledProps {
  isError?: boolean;
}

export const Input = styled.input<IInputStyledProps>`
  display: block;
  padding-left: 10px;
  outline: none;
  border: 1px solid gray;
  border-color: ${({ isError }) => (isError ? '#da0000' : '')};
  border-radius: 5px;
  height: 40px;
  width: 100%;
  margin-top: 0.2rem;
  font-size: clamp(0.8rem, 2vw, 1rem);
`;

export const FieldContainer = styled.div`
  margin-top: 2rem;
  position: relative;
`;

export const Label = styled.label`
  color: gray;
`;

export const ErrorIconContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 50%;
`;
