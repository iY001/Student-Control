import AbsenceChart from "./components/AbsenceChart";
import Box from "./components/box";
import { RiUserLine, RiBookLine, RiUserStarLine, RiCodeSSlashLine, RiWifiLine } from 'react-icons/ri'; // Importing icons
import { LuCable } from "react-icons/lu";
import Table from "./components/Table";


const Page = () => {
  return (
    <section className="rea flex flex-col lg:items-start  py-8 " >
      <div className="fixed  bottom-5 right-0"><svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><path fill="currentColor" d="M783.5 662.5Q687 825 474.5 869T166 706.5q-96-206.5 43-338T522.5 198q174.5-39 266 131.5t-5 333Z"/></clipPath></defs><g clip-path="url(#a)"><path fill="#444cf7" d="M783.5 662.5Q687 825 474.5 869T166 706.5q-96-206.5 43-338T522.5 198q174.5-39 266 131.5t-5 333Z"/></g></svg>
</div>
      <h1 className="uppercase font-bold text-main text-2xl mb-4">DASHBOARD</h1>

      <div className=" flex justify-center flex-wrap gap-3 ">
        <Box href="" icon={RiUserLine} number="500" name="Students" />
        <Box href="" icon={RiBookLine} number="8" name="Classes" />
        <Box href="" icon={RiUserStarLine} number="20" name="Teachers" />
        <Box href="" icon={RiCodeSSlashLine} number="200" name="Programming" />
        <Box href="" icon={RiWifiLine} number="200" name="Network" />
        <Box href="" icon={LuCable} number="200" name="Telecom" />
      </div> {/* All Boxes*/}


      <section className="w-full" >
        

      <div className="mt-10 border-2 p-2 rounded w-max">
        <h1 className="uppercase font-bold text-main text-2xl ">Leaderboard</h1>
        <AbsenceChart />
      </div> {/* Chart  */}

      <div className="mt-10 w-[80%] m-auto border-2 p-2 rounded">
        <Table />
      </div>{/* Table */}
      </section>


    </section>
  );
}

export default Page;
