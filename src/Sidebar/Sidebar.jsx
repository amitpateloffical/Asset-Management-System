import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaList } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { AiOutlineAudit } from "react-icons/ai";
import { MdOutlineDataset } from "react-icons/md";
import { LuComponent } from "react-icons/lu";
import { GrHostMaintenance } from "react-icons/gr";
import { FaCalculator } from "react-icons/fa";
import { FiTag } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FaUserTag } from "react-icons/fa";
import { FaBuildingFlag } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const [setting, setSetting] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
  
    const stopPropagation = (e) => {
      e.stopPropagation();
    };
  
    const handleNavigation = (path) => {
      navigate(path);
    };
  
    const isActive = (path) => {
      return location.pathname === path ? "bg-light" : "";
    };

  
    const isCFRActive = () => {
      const CFRPaths = ["/setting/users", "/setting/application"];
      return CFRPaths.some((path) => location.pathname === path);
    };
  return (
    <div className="">
    {sidebarOpen && (
      <div className="fixed w-64 flex flex-col gap-5  bg-[#23CCEF] text-white p-4 " style={{zIndex:1, overflowY:"auto",height:"100vh"}}>

<img
      src="/login.png"
      className="h-[70px] w-[208px]"
    />
        <div
          className={`flex gap-5 h-14 pl-3 rounded-md items-center cursor-pointer ${isActive(
            "/dashboard"
          )}`}
          onClick={() => handleNavigation("/dashboard")}
        >
          <MdDashboard  size={30} />
          DASHBOARD
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/assets"
          )}`}
          onClick={() => handleNavigation("/assets")}
        >
          <MdOutlineDataset  size={30} />
          ASSETS
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/component"
          )}`}
          onClick={() => handleNavigation("/component")}
        >
          <LuComponent  size={30} />
          COMPONENTS
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/maintenance"
          )}`}
          onClick={() => handleNavigation("/maintenance")}
        >
          <GrHostMaintenance size={30} />
          MAINTENANCES
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/depreciation"
          )}`}
          onClick={() => handleNavigation("/depreciation")}
        >
          <FaCalculator  size={30} />
          DEPRECIATIONS
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/asset-type"
          )}`}
          onClick={() => handleNavigation("/asset-type")}
        >
          <FiTag size={30} />
          ASSET TYPES
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/brand"
          )}`}
          onClick={() => handleNavigation("/brand")}
        >
          <FaBuilding size={30} />
          BRANDS
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/supplier"
          )}`}
          onClick={() => handleNavigation("/supplier")}
        >
          <FiUserCheck  size={30} />
          SUPPLIERS
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/location"
          )}`}
          onClick={() => handleNavigation("/location")}
        >
          <FiMapPin size={30} />
          LOCATIONS
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/employees"
          )}`}
          onClick={() => handleNavigation("/employees")}
        >
          <FaUserTag  size={30} />
          EMPLOYEES
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/department"
          )}`}
          onClick={() => handleNavigation("/department")}
        >
          <FaBuildingFlag size={30} />
          DEPARTMENTS
        </div>
        <div
          className={` h-14 pl-3 rounded-md flex gap-5 items-center cursor-pointer ${isActive(
            "/report"
          )}`}
          onClick={() => handleNavigation("/report")}
        >
          <BiSolidReport size={30} />
          REPORTS
        </div>
        <div
            className={`items-center pl-4 cursor-pointer ${
              isCFRActive() ? "text-White" : ""
            }`}
            onClick={() => setSetting(!setting)}
          >
            <p className="flex   gap-5 items-center">
              <IoSettings size={25} /> SETTING{" "}
              {setting ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
            </p>

            <div
              className="px-5 flex pt-3 cursor-pointer text-md"
              onClick={stopPropagation}
            >
              {setting && (
                <div className="flex text-white flex-col gap-5  ">
                  <p
                    className={` flex items-center gap-3 ${isActive(
                      "/setting/users"
                    )}`}
                    onClick={() => handleNavigation("/setting/users")}
                  >
                    {" "}
                    <FaUserGroup />  USERS{" "}
                  </p>
                  <p
                    className={` flex items-center gap-3 ${isActive(
                      "/setting/application"
                    )}`}
                    onClick={() => handleNavigation("/setting/application")}
                  >
                    {" "}
                    <AiOutlineAudit /> APPLICATION{" "}
                  </p>
                </div>
              )}
            </div>
          </div>
     
      </div>
    )}
  </div>
  )
}

export default Sidebar