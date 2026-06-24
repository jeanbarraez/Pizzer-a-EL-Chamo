export const DELIVERY_COST = 1500;

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const calculatePrepTime = (totalItems, isDelivery) => {
  let baseMin, baseMax;

  if (totalItems === 1) {
    baseMin = 15;
    baseMax = 20;
  } else if (totalItems === 2 || totalItems === 3) {
    baseMin = 25;
    baseMax = 35;
  } else {
    baseMin = 35;
    baseMax = 45;
  }

  if (isDelivery) {
    baseMin += 10;
    baseMax += 15;
  }

  return { min: baseMin, max: baseMax };
};

export const getWhatsAppUrl = (orderDetails) => {
  const {
    customerName,
    customerAddress,
    cartItems,
    total,
    deliveryType,
    paymentMethod,
    prepTime,
  } = orderDetails;
  const itemsList = cartItems
    .map(
      (item) =>
        `${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}`,
    )
    .join("%0A");
  let message =
    `¡Hola Pizzería El Chamo! 🍕%0A%0A` + `Pedido de: ${customerName}%0A`;

  if (deliveryType === "delivery") {
    message += `Dirección: ${customerAddress}%0A`;
  }

  message +=
    `-------------------------%0A` +
    `${itemsList}%0A` +
    `-------------------------%0A` +
    `Total: ${formatCurrency(total)}%0A` +
    `Tipo de entrega: ${deliveryType === "delivery" ? "Delivery (+$1.500)" : "Retiro en tienda"}%0A` +
    `Método de pago: ${paymentMethod}%0A` +
    `Tiempo estimado: ${prepTime.min}-${prepTime.max} minutos%0A%0A` +
    `¡Gracias por tu pedido! 😊`;

  return `https://wa.me/56912345678?text=${message}`;
};

export const getEmailUrl = (orderDetails) => {
  const {
    customerName,
    customerAddress,
    cartItems,
    total,
    deliveryType,
    paymentMethod,
    prepTime,
  } = orderDetails;
  const itemsList = cartItems
    .map(
      (item) =>
        `${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}`,
    )
    .join("%0D%0A");
  let body = `¡Hola Pizzería El Chamo! 🍕\n\n` + `Pedido de: ${customerName}\n`;

  if (deliveryType === "delivery") {
    body += `Dirección: ${customerAddress}\n`;
  }

  body +=
    `-------------------------\n` +
    `${itemsList}\n` +
    `-------------------------\n` +
    `Total: ${formatCurrency(total)}\n` +
    `Tipo de entrega: ${deliveryType === "delivery" ? "Delivery (+$1.500)" : "Retiro en tienda"}\n` +
    `Método de pago: ${paymentMethod}\n` +
    `Tiempo estimado: ${prepTime.min}-${prepTime.max} minutos\n\n` +
    `¡Gracias por tu pedido! 😊`;

  const subject = encodeURIComponent(`Nuevo pedido de ${customerName}`);
  return `mailto:pizzeria@elchamo.cl?subject=${subject}&body=${encodeURIComponent(body)}`;
};

export const getFacebookUrl = () => {
  return "https://www.facebook.com/pizzeriaelchamo";
};
