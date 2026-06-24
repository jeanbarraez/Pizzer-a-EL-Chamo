import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Form,
  Badge,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext.jsx";
import { formatCurrency, DELIVERY_COST } from "../utils/helpers.js";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    subtotal,
    deliveryCost,
    total,
    deliveryType,
    setDeliveryType,
    paymentMethod,
    setPaymentMethod,
    customerName,
    setCustomerName,
    customerAddress,
    setCustomerAddress,
  } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h1 className="mb-4 fw-bold">Tu carrito está vacío</h1>
        <Button
          as={Link}
          to="/menu"
          variant="danger"
          size="lg"
          className="px-5 py-3 fs-5"
        >
          Ver Menú
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-5 fw-bold display-4">Tu Carrito</h1>
      <Row>
        <Col lg={8} className="mb-4">
          {cart.map((item) => (
            <Card key={item.id} className="mb-3 shadow-lg border-0">
              <Card.Body className="d-flex align-items-center p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div className="flex-grow-1 ms-4">
                  <h3 className="fw-bold mb-1">{item.name}</h3>
                  <p className="text-muted fs-5 mb-2">
                    {formatCurrency(item.price)}
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => decreaseQty(item.id)}
                      >
                        <FaMinus />
                      </Button>
                      <span
                        className="fw-bold fs-4"
                        style={{ minWidth: "40px", textAlign: "center" }}
                      >
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => increaseQty(item.id)}
                      >
                        <FaPlus />
                      </Button>
                    </div>
                    <span className="ms-auto fw-bold fs-4 text-danger">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                    <Button
                      variant="outline-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col lg={4}>
          <Card className="shadow-lg sticky-top" style={{ top: "100px" }}>
            <Card.Body className="p-4">
              <h3 className="fw-bold mb-4">Resumen del pedido</h3>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold fs-5">Tu nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  size="lg"
                />
              </Form.Group>

              {deliveryType === "delivery" && (
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold fs-5">Tu dirección</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ingresa tu dirección completa (calle, número, comuna, ciudad)"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    size="lg"
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold fs-5 mb-2">
                  Tipo de entrega
                </Form.Label>
                <div className="d-flex flex-column gap-2">
                  <Form.Check
                    type="radio"
                    label="Retiro en tienda (gratis)"
                    name="deliveryType"
                    value="pickup"
                    checked={deliveryType === "pickup"}
                    onChange={(e) => setDeliveryType(e.target.value)}
                    className="fs-5"
                  />
                  <Form.Check
                    type="radio"
                    label={`Delivery (${formatCurrency(DELIVERY_COST)})`}
                    name="deliveryType"
                    value="delivery"
                    checked={deliveryType === "delivery"}
                    onChange={(e) => setDeliveryType(e.target.value)}
                    className="fs-5"
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold fs-5 mb-2">
                  Método de pago
                </Form.Label>
                <div className="d-flex flex-column gap-2">
                  <Form.Check
                    type="radio"
                    label="Efectivo"
                    name="paymentMethod"
                    value="efectivo"
                    checked={paymentMethod === "efectivo"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="fs-5"
                  />
                  <Form.Check
                    type="radio"
                    label="Transferencia bancaria"
                    name="paymentMethod"
                    value="transferencia"
                    checked={paymentMethod === "transferencia"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="fs-5"
                  />
                </div>
              </Form.Group>

              <hr />

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

              <hr />

              <div className="mb-4 d-flex justify-content-between fw-bold fs-3 text-danger">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>

              <Button
                variant="danger"
                size="lg"
                className="w-100 py-3 fs-5"
                onClick={() => navigate("/confirmacion")}
                disabled={
                  !customerName ||
                  (deliveryType === "delivery" && !customerAddress)
                }
              >
                Confirmar Pedido
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
