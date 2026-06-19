import { Container, Row, Col, Card } from "react-bootstrap";
// 1. Importas tus imágenes locales
import fotoServicio1 from '../../src/image/servicio1.jpeg';
import fotoServicio2 from '../../src/image/servicio2.jpeg';
import fotoServicio3 from '../../src/image/servicio3.jpeg';
import fotoServicio4 from '../../src/image/servicio4.jpeg';
import fotoServicio5 from '../../src/image/servicio5.jpeg';
import fotoServicio6 from '../../src/image/servicio6.jpeg';



const Gallery = () => {
  /* const galleryImages = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop",
  ]; */

  const galleryImages = [
    fotoServicio1,
    fotoServicio2,
    fotoServicio3,
    fotoServicio4,
    fotoServicio5,
    fotoServicio6,
  ];

  return (
    <section id="gallery" className="py-5">
      <Container className="py-5">
        <h2 className="text-center display-4 fw-bold mb-5">Galería de Servicios</h2>
        <p className="text-center mb-4">Sigue nuestro trabajo en Instagram: <a href="https://instagram.com/transportejean" target="_blank" rel="noopener noreferrer" className="text-primary fw-bold">@transportejean</a></p>
        <Row className="g-3">
          {galleryImages.map((img, index) => (
            <Col md={4} sm={6} key={index}>
              <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src={img} height="200" style={{objectFit: 'cover'}} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
