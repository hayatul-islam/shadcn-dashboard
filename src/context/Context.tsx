import { createContext, useState } from "react";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
  const [isFullView, setIsFullView] = useState<boolean>(false);

  const value = {
    isFullView,
    setIsFullView,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
