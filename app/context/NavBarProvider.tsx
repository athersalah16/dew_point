"use client";
import { useContext, useState } from "react";
import { NavBarContext } from "./NavBarContext";
import {usePathname} from "next/navigation";

type Props = { children: React.ReactNode };

function NavBarProvider({ children }: Props) {
  const pathname = usePathname()
  const basePath = `/${pathname.split("/")[1]}`;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <NavBarContext.Provider
      value={{ basePath, isMenuOpen, setIsMenuOpen }}
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
