import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="py-5 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-4 fw-bold">Página no encontrada</h2>
      <p className="lead mb-5 fs-4">Lo sentimos, la página que buscas no existe.</p>
      <Button as={Link} to="/" variant="danger" size="lg" className="px-5 py-3 fs-5">
        Volver al Inicio
      </Button>
    </Container>
  );
};

export default NotFound;
