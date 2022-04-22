import React, { createContext, useContext, useState } from "react";

export const LayoutContext = createContext();

const LayoutProvider = ({ children, pageName }) => {
  const [open, setOpen] = useState(false);
  console.log({ pageName });

  return (
    <LayoutContext.Provider value={{ open, setOpen, pageName }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutProvider;
