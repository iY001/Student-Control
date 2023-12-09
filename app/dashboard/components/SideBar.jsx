import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { FaChartBar, FaClipboardList, FaChalkboardTeacher, FaUserGraduate, FaUserAlt, FaCog } from 'react-icons/fa';
import Link from "next/link";
const SideBar = () => {
  return (
    <aside class="bg-main h-screen fixed top-0 left-0 min-w-[250px] pt-3 pb-4 text-center font-[sans-serif] overflow-auto">
    <div class="relative flex flex-col h-full">
        <div>
            <img src alt />
            <section>
                <h1 className="text-2xl font-bold text-white">STUDENT</h1>
                <h1 className="text-2xl font-bold text-white">CONTROL</h1>
            </section>
        </div>
        <hr className="mx-4 my-3" />
        <ul class="flex-1 flex flex-col gap-3">
        <li>
        <Link href="/dashboard" className="text-white hover:border-r-4 text-md flex items-center hover:bg-sec px-4 py-3 duration-300">
          <FaChartBar className="w-[18px] h-[18px] mr-3" />
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/reports" className="text-white hover:border-r-4 text-md flex items-center hover:bg-sec px-4 py-3 duration-300">
          <FaClipboardList className="w-[18px] h-[18px] mr-3" />
          <span>Reports</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/classes" className="text-white hover:border-r-4 text-md flex items-center hover:bg-sec px-4 py-3 duration-300">
          <FaChalkboardTeacher className="w-[18px] h-[18px] mr-3" />
          <span>Classes</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/students" className="text-white hover:border-r-4 text-md flex items-center hover:bg-sec px-4 py-3 duration-300">
          <FaUserGraduate className="w-[18px] h-[18px] mr-3" />
          <span>Students</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/account" className="text-white hover:border-r-4 text-md flex items-center hover:bg-sec px-4 py-3 duration-300">
          <FaUserAlt className="w-[18px] h-[18px] mr-3" />
          <span>Account</span>
        </Link>
      </li>
      <li>
        <Link href="/dashboard/settings" className="text-white hover:border-r-4 text-md flex items-center hover:bg-sec px-4 py-3 duration-300">
          <FaCog className="w-[18px] h-[18px] mr-3" />
          <span>Settings</span>
        </Link>
      </li>
        </ul>

        <div class="flex flex-wrap items-center cursor-pointer border border-white rounded-full px-6 mx-5 py-2">
            <CgProfile className="w-9 h-9 text-white" />
            <div class="ml-4">
                <p class="text-sm text-white">Profile Name</p>
                <a href="#" class="text-xs flex text-gray-300 hover:text-white"><CiLogout className="text-sm mr-1" /> Sign out</a>
            </div>
        </div>

    </div> {/* Sections */}
</aside> 
  );
}

export default SideBar;
