import React, { createContext, useState } from "react";

interface AppContextProps {
  layoutId: string;
  setLayoutId: React.Dispatch<React.SetStateAction<string>>;
  scrollValue: number;
  setScrollValue: React.Dispatch<React.SetStateAction<number>>;
  scrollXValue: number;
  setScrollXValue: React.Dispatch<React.SetStateAction<number>>;
}

const initialAppContext: AppContextProps = {
  layoutId: "",
  scrollValue: 0,
  setLayoutId: () => {},
  setScrollValue: () => {},
  scrollXValue: 0,
  setScrollXValue: () => {},
};

export const AppContext = createContext<AppContextProps>(initialAppContext);
interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [scrollXValue, setScrollXValue] = useState<number>(0);
  const [layoutId, setLayoutId] = useState<string>("");

  const appContextValue: AppContextProps = {
    layoutId,
    setLayoutId,
    scrollValue,
    setScrollValue,
    scrollXValue,
    setScrollXValue,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
