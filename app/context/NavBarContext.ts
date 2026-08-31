import React, { createContext } from "react";
import { navLinks } from "../company_data/navLinks";

type NavBarContextType = {
  navLink: string;
  isMenuOpen:boolean
  setNavLink: React.Dispatch<React.SetStateAction<string>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const initValue = { navLink: "Home", setNavLink: () => {},setIsMenuOpen:()=>{},isMenuOpen:false };
export const NavBarContext = createContext<NavBarContextType>(initValue);
