import React, { useEffect, useRef, useState } from "react";;
import { useNavigate } from "react-router-dom";
import { PiSignOutFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";

const Header = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
<div className="w-[85%] h-[70px] items-center px-4 py-2 bg-white shadow-md">
  <div className="flex h-[70px] items-center justify-between">
  

    <div className="flex items-center gap-3">
      <div className="hidden sm:block">
        <b className="text-2xl">
        Welcome to Asset Management System
        </b>
      </div>
    </div>
   <div className="flex gap-5">
   <div className="flex items-center gap-3">
      <div className="flex font-semibold justify-center items-center gap-2 text-lg">
      <FaUser /> Welcome, Test 
      </div>
    </div>
    <div className="flex items-center gap-3" onClick={() => { handleLogout(); navigate("/"); }}>
      <div className="flex justify-center items-center text-cyan-800 font-semibold gap-2 text-lg cursor-pointer hover:text-[#68B3C8]">
      <PiSignOutFill /> Logout 
      </div>
    </div>
   </div>

  </div>
</div>

  
  );
};

export default Header;
