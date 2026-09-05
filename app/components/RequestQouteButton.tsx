import { useNavBar } from "../context/NavBarProvider";

function RequestQouteButton() {
  const { setIsMenuOpen } = useNavBar();
  const handleClick = () => {
     setIsMenuOpen(false);
  };

  return (
    <a
      href="/Contact"
      onClick={handleClick}
      className="bg-blue-600 text-center text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-300"
    >
      Request a Quote
    </a>
  );
}

export default RequestQouteButton;
