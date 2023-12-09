import { RxPerson } from "react-icons/rx";
import AbsenceChart from "./components/AbsenceChart";
import { FaChartBar, FaClipboardList, FaChalkboardTeacher, FaUserGraduate, FaUserAlt, FaCog } from 'react-icons/fa';


const Page = () => {
  return (
        <section className="py-8 px-8 w-full"> 

          <div>
            <h1 className="uppercase font-bold text-main text-2xl mb-4">DASHBOARD</h1>
          </div> {/* Title */}

          <div className="w-full flex"> {/* All Boxes - Start */}
            <div className="bg-main  h-24 flex justify-between items-center px-8 rounded-lg shadow-xl"> {/* Students Box - Start */}
              <section className="bg-sec bg-opacity-70 p-2 rounded-md">
                <RxPerson className="text-white text-4xl" />
              </section>
              <section className="px-4 text-white">
                <h1>600</h1>
                <h1>Students</h1>
              </section>
            </div> {/* Students Box - End */}

            <div className="bg-main h-24 flex justify-between items-center px-8 rounded-lg shadow-xl ml-8"> {/* Classes Box - Start */}
              <section className="bg-sec bg-opacity-70 p-2 rounded-md">
              <FaChalkboardTeacher className="text-white text-4xl" />
              </section>
              <section className="px-4 text-white">
                <h1>8</h1>
                <h1>Classes</h1>
              </section>
            </div> {/* Classes Box - End */}

            <div className="bg-main h-24 flex justify-between items-center px-8 rounded-lg shadow-xl ml-8"> {/* Teachers Box - Start*/}
              <section className="bg-sec bg-opacity-70 p-2 rounded-md">
                <RxPerson className="text-white text-4xl" />
              </section>
              <section className="px-4 text-white">
                <h1>20</h1>
                <h1>Teachers</h1>
              </section>
            </div>  {/* Teachers Box - End*/}

            <div className="bg-main h-24 flex justify-between items-center px-8 rounded-lg shadow-xl ml-8"> {/* Programming Box - Start */}
              <section className="bg-sec bg-opacity-70 p-2 rounded-md">
                <RxPerson className="text-white text-4xl" />
              </section>
              <section className="px-4 text-white">
                <h1>200</h1>
                <h1 className="text-sm ">Programming</h1>
              </section>
            </div> {/* Programming Box - End*/}
            <div className="bg-main h-24 flex justify-between items-center px-8 rounded-lg shadow-xl ml-8"> {/* Network Box - Start */}
              <section className="bg-sec bg-opacity-70 p-2 rounded-md">
                <RxPerson className="text-white text-4xl" />
              </section>
              <section className="px-4 text-white">
                <h1>200</h1>
                <h1>Network</h1>
              </section>
            </div> {/* Network Box - End */}
            <div className="bg-main h-24 flex justify-between items-center px-8 rounded-lg shadow-xl ml-8"> {/* Telecommunication Box - Start*/}
              <section className="bg-sec bg-opacity-70 p-2 rounded-md">
                <RxPerson className="text-white text-4xl" />
              </section>
              <section className="px-4 text-white">
                <h1>200</h1>
                <h1>Telecommunication</h1>
              </section>
            </div> {/* Telecommunication Box - End */}
          </div> {/* All Boxes - End */}

          <div>
            <div> {/* Chart & Table - Start */}
              <h1 className="uppercase font-bold text-main text-2xl my-6 ">Leaderboard</h1>
            </div> {/* Title */}

            
            <AbsenceChart />

          </div> {/* Chart & Table     - End */}


        </section> 
  );
}

export default Page;
