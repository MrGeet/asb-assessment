import { Container, Row, Typography } from '../globalStyles';
import { Form } from './Form';

export const HomeScreen = () => {
  return (
    <Container>
      <Row justify="center" margin="2rem 0">
        <Typography textAlign="center" fontSize="clamp(1rem, 3vw, 2.4rem)">
          Welcome user
        </Typography>
      </Row>
      <Form />
    </Container>
  );
};
