"use client";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { FaChartBar, FaClipboardList, FaChalkboardTeacher, FaUserGraduate, FaUserAlt, FaCog } from 'react-icons/fa';
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
const SideBar = () => {
  const [isMobile, setIsMobile] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'))
  const router = useRouter()
  useEffect(() => {
    const checkScreenSize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    deleteCookie('token')
    router.push('/login')
  }

  return (
    <aside className={`md:z-10 bg-main h-screen fixed top-0 left-0 ${isMobile ? "w-[88px]" : "w-[250px]"}  pt-3 pb-4 text-center font-[sans-serif] overflow-auto shadow-2xl transition-all duration-300`}>
      <div className="relative flex flex-col h-full">
        <div>
          {/* <img src alt /> */}
          <section>
            <h1 className="lg:text-2xl font-bold text-white">STUDENT <br />CONTROL</h1>
            <img className="w-[50px] h-[50px] mx-auto border-4 border-white rounded-full" src="/assets/We_logo.png" alt="" />
          </section>
        </div>
        <hr className="mx-4 my-3" />
        <ul className={`flex-1 flex flex-col ${isMobile ? "items-center" : ""}  gap-3`}>
          <SideBarItem isMobile={isMobile}  href="/dashboard" icon={FaChartBar} name="Dashboard" />
          <SideBarItem isMobile={isMobile}  href="/dashboard/reports" icon={FaClipboardList} name="Reports" />
          <SideBarItem isMobile={isMobile}  href="/dashboard/classes" icon={FaChalkboardTeacher} name="Classes" />
          <SideBarItem isMobile={isMobile}  href="/dashboard/students" icon={FaUserGraduate} name="Students" />
          <SideBarItem isMobile={isMobile}  href="/dashboard/account" icon={FaUserAlt} name="Account" />
          <SideBarItem isMobile={isMobile}  href="/dashboard/settings" icon={FaCog} name="Settings" />
        </ul>

        <div onClick={handleLogout}  className="group flex lg:flex-row flex-col gap-2 lg:flex-wrap items-center cursor-pointer border border-white rounded-full px-6 mx-5 py-2">
          {!isMobile && <CgProfile className="text-white text-3xl" />}
          <div  className="">
            {!isMobile && <h1 className="text-white">{user?.Username}</h1>}
            <a href="#" className="text-xs flex text-gray-300 group-hover:text-white"><CiLogout className="lg:text-sm text-lg  " /> {!isMobile && <span>Sign Out</span>}</a>
          </div>
        </div>

      </div> {/* Sections */}

    </aside>
  );
}

export default SideBar;


const SideBarItem = ({isMobile, href, icon: Icon, name }) => {
  return (
    <li>
      <Link href={href} className="text-white hover:border-r-4 text-md flex items-center hover:bg-sec px-4 py-3 duration-300">
        {Icon && <Icon className="w-[18px] h-[18px] mr-3" />}
        {!isMobile && <span>{name}</span>}
      </Link>
    </li>
  );
};