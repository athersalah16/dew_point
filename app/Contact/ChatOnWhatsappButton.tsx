'use client';
import { FaWhatsapp } from 'react-icons/fa6';

function ChatOnWhatsappButton() {
  const whatsappNumber = '971502387010'
  const handleClick = () => {
      window.location.href = `https://wa.me/${whatsappNumber}`;

  }
  return (
   
      <button onClick={handleClick} className="border-none outline-none bg-green-500 flex flex-row  gap-3 cursor-pointer justify-center items-center text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300">
        <FaWhatsapp/> Chat on WhatsApp
      </button>
    
  )
}

export default ChatOnWhatsappButton
