import React, { createContext, useState } from "react";

interface AppContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  layoutId: string;
  setLayoutId: React.Dispatch<React.SetStateAction<string>>;
}

const initialAppContext: AppContextProps = {
  open: false,
  setOpen: () => {},
  layoutId: "",
  setLayoutId: () => {},
};

export const AppContext = createContext<AppContextProps>(initialAppContext);
interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [layoutId, setLayoutId] = useState<string>("");

  const appContextValue: AppContextProps = {
    open,
    setOpen,
    layoutId,
    setLayoutId,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
