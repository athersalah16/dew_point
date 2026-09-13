import React, { createContext } from "react";
import { navLinks } from "../../company_data/navLinks";

type NavBarContextType = {
  basePath: string;
  isMenuOpen:boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const initValue = { basePath: "", setIsMenuOpen:()=>{},isMenuOpen:false };
export const NavBarContext = createContext<NavBarContextType>(initValue);
