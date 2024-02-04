import Filter from "./Components/Filter";
const Page = () => {
    return (
        <>
            <div className="w-full my-8">
                <h1 className="uppercase font-bold text-main text-2xl mb-4">
                    Students
                </h1>
                <div className="bg-gray-300 h-[0.5px]"></div> {/* Line */}
                {/* Filter Container */}
                <div className="w-[75%]">
                    <div className="p-4">
                        <Filter />
                    </div>
                </div>
                {/* Filter Container */}
                <div className="bg-gray-300 h-[0.5px]"></div> {/* Line */}
            </div>{" "}
            {/* Main Div */}
        </>
    );
};

export default Page;
