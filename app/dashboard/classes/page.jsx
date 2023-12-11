import ClassBox from "./components/ClassBox";

const Page = () => {
    return (
        <>
            <div className="w-full my-8">
                <h1 className="uppercase font-bold text-main text-2xl mb-4">Classes</h1>

                <div className="mx-auto w-[75%]">
                    <ClassBox/>
                    <ClassBox/>
                    <ClassBox/>
                    <ClassBox/>
                </div>


            </div> {/* Main Div */}
        </>
    );
}

export default Page;
