import { createContext, useState } from "react";

export const TransportContext = createContext();

const TransportContextProvider = ({ children }) => {
  // estado inicial de una cotización para el servicio de transporte
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    serviceType: "",
    date: "",
    details: "",
  });

  // Esta función permite actualizar un campo específico del formulario
  const updateQuoteData = (field, value) => {
    setQuoteData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Una función de utilidad para limpiar todo el formulario
  const resetQuoteData = () => {
    setQuoteData({
      name: "",
      email: "",
      phone: "",
      origin: "",
      destination: "",
      serviceType: "",
      date: "",
      details: "",
    });
  };

  return (
    <TransportContext.Provider
      value={{
        quoteData,
        updateQuoteData,
        resetQuoteData,
      }}
    >
      {children}
    </TransportContext.Provider>
  );
};

export default TransportContextProvider;
