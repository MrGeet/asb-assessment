import styled from 'styled-components';
import { Container, Row } from './../globalStyles';

export const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  font-size: clamp(0.8rem, 2vw, 1rem);

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }

  ${Container}
`;

export const FormWrapper = styled.form`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > button {
    width: 100%;
    margin-top: 2rem;
    border: none;
    grid-area: button;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const FormRow = styled(Row)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
