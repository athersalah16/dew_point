"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import RequestQouteButton from "../components/RequestQouteButton";
import { X, Menu } from "lucide-react";
import { useNavBar } from "../context/NavBarProvider";
import ChatOnWhatsappButton from "../Contact/components/ChatOnWhatsappButton";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const {  setIsMenuOpen, isMenuOpen } = useNavBar();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const textStyle = "hover:text-white hover:bg-blue-500";
  return (
    <div
      className={`flex fixed flex-row items-center justify-between w-full px-4 py-2   z-50 bg-white ${isScrolled ? " border-gray-300  shadow-md lg:shadow-lg shadow-gray-300 " : " border-gray-200 "} border-b  transition-all duration-300`}
    >
      <div>
        <Logo className="text-blue-400" />
      </div>

      <div className="hidden lg:flex ">
        <NavLinks
          navLinkStyle="bg-blue-500 text-white"
         
          className="flex-row gap-4 "
          textStyle={textStyle}
        />
      </div>

      <div
        onClick={handleMenuClick}
        className="lg:hidden w-12 h-12 items-center flex justify-center  text-black cursor-pointer"
      >
        {isMenuOpen ? <X /> : <Menu />}
      </div>
      {isMenuOpen && (
        <div
          className={`lg:hidden min-h-screen fixed top-16 left-0 w-full py-3  px-4 rounded-md bg-zinc-50 shadow-xl  transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <NavLinks
            handleMenuClick={setIsMenuOpen}
            navLinkStyle="bg-blue-500 text-white"
         
            textStyle={textStyle}
            className="flex-col hover:text-blue-950 hover:bg-gray-100 gap-4 py-4"
          />
         <div className="flex flex-col gap-4">
           <RequestQouteButton />
          <ChatOnWhatsappButton/>
         </div>
        </div>
      )}
      <div className="hidden lg:flex">
        <RequestQouteButton />
      </div>
    </div>
  );
}

export default Header;
