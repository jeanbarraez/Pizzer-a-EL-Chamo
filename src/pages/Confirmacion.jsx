import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaWhatsapp, FaEnvelope, FaFacebook } from "react-icons/fa";
import { CartContext } from "../context/CartContext.jsx";
import {
  formatCurrency,
  calculatePrepTime,
  getWhatsAppUrl,
  getEmailUrl,
  getFacebookUrl,
} from "../utils/helpers.js";

const Confirmacion = () => {
  const {
    cart,
    clearCart,
    subtotal,
    deliveryCost,
    total,
    totalItems,
    deliveryType,
    paymentMethod,
    customerName,
    customerAddress,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const prepTime = calculatePrepTime(totalItems, deliveryType === "delivery");

  const handleNewOrder = () => {
    clearCart();
    navigate("/");
  };

  const orderDetails = {
    customerName,
    customerAddress,
    cartItems: cart,
    total,
    deliveryType,
    paymentMethod,
    prepTime,
  };

  if (cart.length === 0 || !customerName) {
    return (
      <Container className="py-5 text-center">
        <h2 className="mb-4">No tienes pedidos pendientes</h2>
        <Button variant="danger" onClick={() => navigate("/menu")}>
          Ver Menú
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5 fw-bold display-4">
        Confirmación de Pedido
      </h1>
      <Row>
        <Col lg={8} className="mb-4">
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-success text-white fw-bold fs-4 text-center py-4">
              ✅ ¡Pedido Confirmado!
            </Card.Header>
            <Card.Body className="p-4">
              <h3 className="fw-bold mb-4">Detalles del Pedido</h3>

              <p className="mb-2 fs-5">
                <strong>Cliente:</strong> {customerName}
              </p>
              <p className="mb-4 fs-5">
                <strong>Tipo de entrega:</strong>{" "}
                {deliveryType === "delivery" ? "Delivery" : "Retiro en tienda"}
              </p>
              {deliveryType === "delivery" && (
                <p className="mb-4 fs-5">
                  <strong>Dirección:</strong> {customerAddress}
                </p>
              )}

              {paymentMethod === "transferencia" && (
                <div className="mb-4 p-4 bg-light rounded border">
                  <h4 className="fw-bold mb-3 text-primary">
                    Datos bancarios para transferencia:
                  </h4>
                  <p className="mb-1">
                    <strong>Banco:</strong> Banco del Estado
                  </p>
                  <p className="mb-1">
                    <strong>Nombre:</strong> Pizzería El Chamo SpA
                  </p>
                  <p className="mb-1">
                    <strong>RUT:</strong> 12.345.678-9
                  </p>
                  <p className="mb-1">
                    <strong>Cuenta Corriente:</strong> 123456789
                  </p>
                  <p className="mb-1">
                    <strong>Email:</strong> pagos@pizzeriaelchamo.cl
                  </p>
                  <p className="mb-0 text-muted small">
                    Por favor, envía el comprobante a este email
                  </p>
                </div>
              )}

              <h4 className="fw-bold mb-3">Tu orden:</h4>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-2 fs-5"
                >
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <span className="fw-bold">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              ))}

              <hr className="my-4" />

              <div className="mb-2 d-flex justify-content-between fs-5">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              {deliveryType === "delivery" && (
                <div className="mb-2 d-flex justify-content-between fs-5">
                  <span>Delivery</span>
                  <span>{formatCurrency(deliveryCost)}</span>
                </div>
              )}

              <div className="mb-4 d-flex justify-content-between fw-bold fs-3 text-danger">
                <span>Total a pagar</span>
                <span>{formatCurrency(total)}</span>
              </div>

              <div className="alert alert-info fs-5">
                ⏱️ Tiempo estimado de preparación:{" "}
                <strong>
                  {prepTime.min}-{prepTime.max} minutos
                </strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="shadow-lg sticky-top" style={{ top: "100px" }}>
            <Card.Header className="fw-bold fs-4 text-center py-3">
              📱 Envía tu pedido
            </Card.Header>
            <Card.Body className="p-4 d-flex flex-column gap-3">
              <Button
                href={getWhatsAppUrl(orderDetails)}
                target="_blank"
                rel="noopener noreferrer"
                variant="success"
                size="lg"
                className="py-3 fs-5"
              >
                <FaWhatsapp className="me-2" /> Enviar por WhatsApp
              </Button>
              <Button
                href={getEmailUrl(orderDetails)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="py-3 fs-5"
              >
                <FaEnvelope className="me-2" /> Enviar por Email
              </Button>
              <Button
                href={getFacebookUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="py-3 fs-5"
              >
                <FaFacebook className="me-2" /> Contactar por Facebook
              </Button>
              <hr />
              <Button
                variant="outline-danger"
                onClick={handleNewOrder}
                size="lg"
                className="py-3 fs-5"
              >
                Hacer un nuevo pedido
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirmacion;
