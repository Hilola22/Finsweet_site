import React from "react";
import logo from "../../assets/Logo.svg";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1C1E53] text-white">
      <div className="container mx-auto px-6 py-16 flex md:flex-row justify-between gap-[149px]">
        <div className="max-w-md">
          <img src={logo} alt="Logo" className="mb-6 " />
          <p className="text-[#BBBBCB] mb-[86px]">
            We are always open to discuss your project and improve your online
            presence.
          </p>
          <div className="bg-[#FCD980] text-[#1C1E53] p-6 w-[517px] h-[95px]">
            <h4 className="font-semibold mb-2">Email us at</h4>
            <p>contact@website.com</p>
            <h4 className="font-semibold mt-4 mb-2">Call us</h4>
            <p>+998 (90) 123-45-67</p>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[48px] font-bold mb-[14px]">Lets Talk!</h3>
          <p className="text-[#BBBBCB] mb-6 w-[399px]">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#FCD980]">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-[#FCD980]">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-[#FCD980]">
              <Linkedin size={16} />
            </a>
            <a href="#" className="hover:text-[#FCD980]">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
