"use client";
import { useContext, useEffect, useState } from "react";
import { NavBarContext } from "./NavBarContext";

type Props = { children: React.ReactNode };

function NavBarProvider({ children }: Props) {
  
  const [navLink, setNavLink] = useState<string>('#');

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

 

  return (
    <NavBarContext.Provider
      value={{ navLink, setNavLink, isMenuOpen, setIsMenuOpen }}
    >
      {children}
    </NavBarContext.Provider>
  );
}
function useNavBar() {
  const navBarContext = useContext(NavBarContext);
  if (!navBarContext) throw new Error("Faild to Load Context");
  return navBarContext;
}

export { useNavBar };
export default NavBarProvider;
