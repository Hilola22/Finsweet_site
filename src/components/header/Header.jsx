import React from 'react'
import logo from  "../../assets/Logo.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-[#1C1E53]">
      <div className="container">
        <nav className="flex items-center justify-between h-[92px] text-white">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="flex gap-10">
            <li>
              <Link className="text-[#BBBBCB] hover:text-white" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-[#BBBBCB] hover:text-white" to={"/about"}>
                About us
              </Link>
            </li>
            <li>
              <Link className="text-[#BBBBCB] hover:text-white" to={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li>
              <Link className="text-[#BBBBCB] hover:text-white" to={"/work"}>
                Work
              </Link>
            </li>
            <li>
              <Link className="text-[#BBBBCB] hover:text-white" to={"/blog"}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="w-[185px] h-[60px] border-2 rounded-[41px] py-4 px-12 text-[#BBBBCB] hover:text-white"
                to={"/contact"}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header