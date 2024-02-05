import Box from "./components/box";
import { RiUserLine, RiBookLine, RiUserStarLine, RiCodeSSlashLine, RiWifiLine } from 'react-icons/ri'; // Importing icons
import { LuCable } from "react-icons/lu";
import Table from "./components/Table";
import StudentsAbsenceChart from "./components/StudentsAbsenceChart";
import ClassAbsenceChart from "./components/ClassAbsenceChart";
import { AiOutlineSearch } from 'react-icons/ai';


const Page = () => {
  return (
    <section className="rea flex flex-col lg:items-start  py-8 " >
      <div className="fixed  bottom-5 right-0"><svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><path fill="currentColor" d="M783.5 662.5Q687 825 474.5 869T166 706.5q-96-206.5 43-338T522.5 198q174.5-39 266 131.5t-5 333Z" /></clipPath></defs><g clip-path="url(#a)"><path fill="#444cf7" d="M783.5 662.5Q687 825 474.5 869T166 706.5q-96-206.5 43-338T522.5 198q174.5-39 266 131.5t-5 333Z" /></g></svg>
      </div>
      <h1 className="uppercase font-bold text-main text-2xl mb-4">DASHBOARD</h1>

      <div className=" flex justify-center md:justify-start flex-wrap  gap-3 ">
        <Box href="" icon={RiUserLine} number="500" name="Students" />
        <Box href="" icon={RiBookLine} number="8" name="Classes" />
        <Box href="" icon={RiUserStarLine} number="20" name="Teachers" />
        <Box href="" icon={RiCodeSSlashLine} number="200" name="Programming" />
        <Box href="" icon={RiWifiLine} number="200" name="Network" />
        <Box href="" icon={LuCable} number="200" name="Telecom" />
      </div> {/* All Boxes*/}


      <section className="w-full md:px-0 px-4 mt-16 " >

        <div className="w-full m-auto">
          <h1 className="uppercase font-bold text-main text-2xl">Leaderboard</h1>
          <div className="mt-10 w-full h-full flex justify-around flex-col md:flex-row gap-10">
            <div className="md:w-[55%] h-[400px] w-full  bg-white drop-shadow-lg p-5 rounded-md"><StudentsAbsenceChart /></div>
            <div className="md:w-[30%] md:h-[400px] w-full   bg-white drop-shadow-lg p-5 rounded-md flex items-center justify-center"><ClassAbsenceChart /></div>
          </div>
        </div>


        <div className="mt-10 md:w-[80%] w-full m-auto border-2  rounded bg-white">
          <div className="flex items-center p-3 rounded-md bg-white w-[300px] m-5 drop-shadow">
            <AiOutlineSearch className="text-main" />
            <input type="text" placeholder="Search Students" className="outline-none ml-2 " />
          </div>
          <Table />
        </div>{/* Table */}
      </section>


    </section>
  );
}

export default Page;
