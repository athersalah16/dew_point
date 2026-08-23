import React from "react";
import { navLinks } from "../company_data/navLinks";
type Props = {
  className: string;
  textStyle: string
};
function NavLinks({ className,textStyle }: Props) {
  return (
    <nav className={`flex ${className}`}>
      {navLinks.map((link, index) => (
        <a href={link.href} key={index + 1} className={` ${textStyle} rounded-md px-4  py-2   transition-colors duration-300 text-black/45  `}> 
          {link.name}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
