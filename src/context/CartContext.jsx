import { createContext, useState, useEffect } from "react";
import { DELIVERY_COST } from "../utils/helpers.js";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("pizzeria-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [deliveryType, setDeliveryType] = useState(() => {
    const saved = localStorage.getItem("pizzeria-delivery");
    return saved || "pickup";
  });
  const [paymentMethod, setPaymentMethod] = useState(() => {
    const saved = localStorage.getItem("pizzeria-payment");
    return saved || "efectivo";
  });
  const [customerName, setCustomerName] = useState(() => {
    const saved = localStorage.getItem("pizzeria-name");
    return saved || "";
  });
  const [customerAddress, setCustomerAddress] = useState(() => {
    const saved = localStorage.getItem("pizzeria-address");
    return saved || "";
  });

  useEffect(() => {
    localStorage.setItem("pizzeria-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("pizzeria-delivery", deliveryType);
  }, [deliveryType]);

  useEffect(() => {
    localStorage.setItem("pizzeria-payment", paymentMethod);
  }, [paymentMethod]);

  useEffect(() => {
    localStorage.setItem("pizzeria-name", customerName);
  }, [customerName]);

  useEffect(() => {
    localStorage.setItem("pizzeria-address", customerAddress);
  }, [customerAddress]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
    setCustomerName("");
    setCustomerAddress("");
    localStorage.removeItem("pizzeria-cart");
    localStorage.removeItem("pizzeria-name");
    localStorage.removeItem("pizzeria-address");
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryCost = deliveryType === "delivery" ? DELIVERY_COST : 0;
  const total = subtotal + deliveryCost;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        deliveryType,
        setDeliveryType,
        paymentMethod,
        setPaymentMethod,
        customerName,
        setCustomerName,
        customerAddress,
        setCustomerAddress,
        subtotal,
        deliveryCost,
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
