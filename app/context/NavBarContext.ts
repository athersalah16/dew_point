import React, { createContext } from "react";
import { navLinks } from "../../company_data/navLinks";

type NavBarContextType = {
  pathname: string;
  isMenuOpen:boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const initValue = { pathname: "", setIsMenuOpen:()=>{},isMenuOpen:false };
export const NavBarContext = createContext<NavBarContextType>(initValue);
