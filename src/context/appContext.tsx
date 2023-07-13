import React, { createContext, useState } from "react";

interface AppContextProps {
  layoutId: string;
  setLayoutId: React.Dispatch<React.SetStateAction<string>>;
  scrollValue: number;
  setScrollValue: React.Dispatch<React.SetStateAction<number>>;
  scrollXValue: string;
  setScrollXValue: React.Dispatch<React.SetStateAction<string>>;
}

const initialAppContext: AppContextProps = {
  layoutId: "",
  scrollValue: 0,
  setLayoutId: () => {},
  setScrollValue: () => {},
  scrollXValue: '',
  setScrollXValue: () => {},
};

export const AppContext = createContext<AppContextProps>(initialAppContext);
interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [scrollXValue, setScrollXValue] = useState<string>('0');
  const [layoutId, setLayoutId] = useState<string>("");

  const appContextValue: AppContextProps = {
    layoutId,
    setLayoutId,
    scrollValue,
    setScrollValue,
    scrollXValue,
    setScrollXValue,
  };
console.log('layoutId', layoutId)
  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
