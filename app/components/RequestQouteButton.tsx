import { useNavBar } from "../context/NavBarProvider";

function RequestQouteButton() {
  const { setNavLink, setIsMenuOpen } = useNavBar();
  const handleClick = () => {
    setNavLink(prev=> prev === "#contact" ?prev:   "#contact");
     setIsMenuOpen(false);
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-300"
    >
      Request a Quote
    </a>
  );
}

export default RequestQouteButton;
