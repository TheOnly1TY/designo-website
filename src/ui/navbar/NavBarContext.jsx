import { createContext, useContext, useState } from "react";

const NavBarContext = createContext();

function NavBarProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavBarContext.Provider value={{ handleNavToggle, isNavOpen }}>
      {children}
    </NavBarContext.Provider>
  );
}

function useNavbar() {
  const context = useContext(NavBarContext);

  if (context === undefined)
    throw new Error("Context was used ouside it's provider");

  return context;
}

export { NavBarProvider, useNavbar };
