import GetInTouch from "../Contact/GetInTouch";
import Logo from "../Header/Logo";
import NavLinks from "../Header/NavLinks";

function Footer() {
  const logoTextStyle = `text-white text-blue-500`
  return (
    <div className="flex w-full min-h-full  items-center flex-col bg-blue-950  ">
      <div className=" w-full flex flex-col py-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col py-5 gap-4 items-center lg:items-start px-3">
          <Logo className={logoTextStyle} />
          <div className="text-gray-500 px-3  text-md max-w-md flex justify-center  ">
            A UAE-based supply and technical services partner delivering
            engineered material packages, procurement and logistics support to
            industrial and EPC projects.
          </div>
          <div className="text-gray-500 text-sm max-w-md px-2 uppercase">
            Engineering · Procurement · Industrial Solutions
          </div>
        </div>
        <div>
          <p className="text-gray-400 px-2 ">Navigate</p>
          <NavLinks
            className="flex-col"
            textStyle="text-gray-600 hover:text-white"
          />
        </div>
        <div>
          <p className="text-gray-400 py-3 px-2">Get in Touch</p>
          <GetInTouch className="text-white" />
        </div>
      </div>

      <div className="flex w-full px-4 lg:flex-row lg:justify-between flex-col gap-3 py-4 ">
        <p className="text-gray-400  text-sm">
          &copy; {new Date().getFullYear()} Dew Point Trading. All rights
          reserved.
        </p>
        <div className=" flex flex-col lg:flex-row gap-6">
          {" "}
          <p className="text-gray-400  text-sm">UAE ICV Certified</p>
          <p className="text-gray-400 text-sm ">ISO 9001:2015</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
