import Container from '../../components/Layouts/Container';

interface ErrorProps {
  title?: string;
  message?: string;
}

function Error({
  title = 'Error',
  message = 'Something went wrong',
}: ErrorProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{message}</p>
    </Container>
  );
}

export default Error;
