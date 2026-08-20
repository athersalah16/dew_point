import React from "react";
import { navLinks } from "../company_data/navLinks";
type Props = {
  className: string;
};
function NavLinks({ className }: Props) {
  return (
    <nav className={`flex ${className}`}>
      {navLinks.map((link, index) => (
        <a href={link.href} key={index + 1} className={` hover:bg-gray-100 rounded-md px-4  py-2 hover:text-blue-950  transition-colors duration-300 text-black/45  `}> 
          {link.name}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
