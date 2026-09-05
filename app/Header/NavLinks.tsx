"use client";
import React from "react";
import { navLinks } from "../../company_data/navLinks";
import { useNavBar } from "../context/NavBarProvider";
type Props = {
  className: string;
  textStyle: string;
  navLink?: string;
  navLinkStyle: string;
  handleClick?: React.Dispatch<React.SetStateAction<string>>;
  handleMenuClick?: React.Dispatch<React.SetStateAction<boolean>>;
};
function NavLinks({
  className,
  textStyle,
  navLinkStyle,
  handleMenuClick = () => {},
}: Props) {
  const { pathname } = useNavBar();

  const handleClick = () => {
    if (!handleMenuClick) return;
    handleMenuClick(false);
  };
  return (
    <nav className={`flex ${className}`}>
      {navLinks.map(({ name, href }, index) => (
        <a
          onClick={() => handleClick()}
          href={href}
          key={index + 1}
          className={` ${textStyle} rounded-md px-4  py-2  ${href === pathname ? navLinkStyle : ""}  transition-colors duration-300 text-black/45  `}
        >
          {name}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
