const Page = () => {
    return (
        < >
            <div className="w-full my-8">
                <h1 className="uppercase font-bold text-main text-2xl mb-4">Students</h1>

                <div className="bg-gray-300 h-[0.5px]"></div>
                <div className="w-[75%]">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold text-d_grey mb-4">Filter</h1>
                        {/* <select aria-placeholder="Department" name="Department" id="" className="px-4 py-2 border-2 rounded-lg border-gray-300 mr-4 bg-gray-50">
                            <option value="" disabled>Department</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select> */}
                    <div className="relative w-12">

                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                    </div>

                    </div>
                </div>
                <div className="bg-gray-300 h-[0.5px]"></div>

            </div> {/* Main Div */}
        </ >
    );
}

export default Page;
