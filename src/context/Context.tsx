import { Dispatch, SetStateAction, createContext, useState } from "react";

// Default context values (replace this with your actual default values)
const defaultContextValues = {
  isFullView: false,
  setIsFullView: () => {},
};
interface ContextProps {
  isFullView: boolean;
  setIsFullView: Dispatch<SetStateAction<boolean>>;
}

// Create a context with default values
export const ContextProvider =
  createContext<ContextProps>(defaultContextValues);

// Context component
export const Context = ({ children }: any) => {
  const [isFullView, setIsFullView] = useState<boolean>(false);

  const value: ContextProps = {
    isFullView,
    setIsFullView,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
