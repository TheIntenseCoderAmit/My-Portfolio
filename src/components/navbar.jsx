 
import {FaLinkedin} from "react-icons/fa";
import  logo from "../assets/Amit1.png";
import {FaGithub} from "react-icons/fa";
 import {FaWhatsapp} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
           <img src={logo} alt="logo" className="w-48 px-5 " />

        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
            <FaGithub/>
            <FaLinkedin/>
            <FaInstagram/>
            <FaWhatsapp/>
        </div>

    </nav>
  );
}

export default Navbar;
