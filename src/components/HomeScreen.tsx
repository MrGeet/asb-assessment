import { Container, Row, Typography } from '../globalStyles';
import { Form } from './Form';
import { useSelector } from 'react-redux';
import { selectUserFullName } from '../features/userSelectors';

export const HomeScreen = () => {
  const fullName = useSelector(selectUserFullName);

  return (
    <Container>
      <Row justify="center" margin="2rem 0">
        <Typography textAlign="center" fontSize="clamp(1rem, 3vw, 2.4rem)">
          Welcome {fullName}
        </Typography>
      </Row>
      <Form />
    </Container>
  );
};
