import { useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TransportContext } from "../context/TransportContext";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const QuoteForm = () => {
  const { quoteData, updateQuoteData, resetQuoteData } = useContext(TransportContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const generateWhatsAppMessage = () => {
    const message = `¡Hola TRANSPORTEJEAN! Quiero cotizar un servicio:
- Nombre: ${quoteData.name}
- Email: ${quoteData.email}
- Teléfono: ${quoteData.phone}
- Origen: ${quoteData.origin}
- Destino: ${quoteData.destination}
- Tipo de servicio: ${quoteData.serviceType}
- Fecha: ${quoteData.date}
- Detalles: ${quoteData.details}`;
    return encodeURIComponent(message);
  };

  const generateGmailLink = () => {
    const subject = encodeURIComponent("Cotización de Flete/Mudanza");
    const body = encodeURIComponent(`¡Hola TRANSPORTEJEAN! Quiero cotizar un servicio:

- Nombre: ${quoteData.name}
- Email: ${quoteData.email}
- Teléfono: ${quoteData.phone}
- Origen: ${quoteData.origin}
- Destino: ${quoteData.destination}
- Tipo de servicio: ${quoteData.serviceType}
- Fecha: ${quoteData.date}
- Detalles: ${quoteData.details}`);
    return `mailto:jeanbarraez17@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="quote" className="py-5 bg-light">
      <Container className="py-5">
        <h2 className="text-center display-4 fw-bold mb-5">Cotiza Tu Servicio</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
              <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  value={quoteData.name}
                  onChange={(e) => updateQuoteData("name", e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={quoteData.email}
                  onChange={(e) => updateQuoteData("email", e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  value={quoteData.phone}
                  onChange={(e) => updateQuoteData("phone", e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Origen</Form.Label>
                <Form.Control
                  type="text"
                  value={quoteData.origin}
                  onChange={(e) => updateQuoteData("origin", e.target.value)}
                  placeholder="Dirección de origen"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Destino</Form.Label>
                <Form.Control
                  type="text"
                  value={quoteData.destination}
                  onChange={(e) => updateQuoteData("destination", e.target.value)}
                  placeholder="Dirección de destino"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tipo de Servicio</Form.Label>
                <Form.Select
                  value={quoteData.serviceType}
                  onChange={(e) => updateQuoteData("serviceType", e.target.value)}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Mudanza Residencial">Mudanza Residencial</option>
                  <option value="Flete de Carga">Flete de Carga</option>
                  <option value="Mudanza de Oficina">Mudanza de Oficina</option>
                  <option value="Servicio Interurbano">Servicio Interurbano</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fecha Tentativa</Form.Label>
                <Form.Control
                  type="date"
                  value={quoteData.date}
                  onChange={(e) => updateQuoteData("date", e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Detalles Adicionales</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={quoteData.details}
                  onChange={(e) => updateQuoteData("details", e.target.value)}
                  placeholder="Describe tu carga o mudanza..."
                />
              </Form.Group>

              <div className="d-grid gap-3">
                <a
                  href={`https://wa.me/56986813898?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg fw-bold"
                >
                  <FaWhatsapp className="me-2" />
                  Enviar por WhatsApp
                </a>
                <a
                  href={generateGmailLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger btn-lg fw-bold"
                >
                  <FaEnvelope className="me-2" />
                  Enviar por Email
                </a>
                <Button variant="secondary" onClick={resetQuoteData}>
                  Limpiar Formulario
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuoteForm;
