import { Dispatch, SetStateAction, createContext, useState } from "react";

// Default context values (replace this with your actual default values)
const defaultContextValues = {
  isFullView: false,
  setIsFullView: () => {},
  isMenuOpen: false,
  setIsMenuOpen: () => {},
};
interface ContextProps {
  isFullView: boolean;
  setIsFullView: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

// Create a context with default values
export const ContextProvider =
  createContext<ContextProps>(defaultContextValues);

// Context component
export const Context = ({ children }: any) => {
  const [isFullView, setIsFullView] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const value: ContextProps = {
    isFullView,
    setIsFullView,
    isMenuOpen,
    setIsMenuOpen,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
