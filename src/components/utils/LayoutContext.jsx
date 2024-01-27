import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const useLayoutContext = () => useContext(LayoutContext);

// eslint-disable-next-line react/prop-types
export const LayoutProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <LayoutContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
};
