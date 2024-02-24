import getStudents from "@/Services/Students/getStudents";
import Filter from "./Components/Filter";
import Table from "./Components/Table";

const Page = async () => {
  const students = await getStudents()
  
    return (
        <>
            <div className="w-full my-8">
                <h1 className="uppercase font-bold text-main text-2xl mb-4">
                    Students
                </h1>
                <div className="bg-gray-300 h-[0.5px]"></div> {/* Line */}
                

                  <section>
                    <Table students={students} />
                  </section>

            </div>
            {/* Main Div */}
        </>
    );
};

export default Page;
