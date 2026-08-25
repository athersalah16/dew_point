"use client";
import React from "react";
import { navLinks } from "../company_data/navLinks";
type Props = {
  className: string;
  textStyle: string;
  navLink: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
  handleMenuClick?: React.Dispatch<React.SetStateAction<boolean>>;
};
function NavLinks({
  className,
  textStyle,
  handleClick = ()=>{},
  navLink,
  handleMenuClick = ()=>{},
}: Props) {
  return (
    <nav className={`flex ${className}`}>
      {navLinks.map(({ name, href }, index) => (
        <a
          onClick={() => {
            handleClick((prev) => (name === prev ? prev : name));
            if (!handleMenuClick) return;
            handleMenuClick(false);
          }}
          href={href}
          key={index + 1}
          className={` ${textStyle} rounded-md px-4  py-2  ${name === navLink ? "bg-blue-500 text-white" : ""}  transition-colors duration-300 text-black/45  `}
        >
          {name}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
