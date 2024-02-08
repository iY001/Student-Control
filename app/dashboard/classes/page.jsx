import ClassBox from "./components/ClassBox";

const Page = () => {
    return (
        <>
            <div className="w-full my-8">
                <h1 className="uppercase font-bold text-main text-2xl mb-4">Classes</h1>

                <div className="mx-auto w-[75%]">
                    <h1 className="text-center font-semibold text-xl text-">Search Classes</h1>
                    <ClassBox department={ "Programming"}/>
                    <ClassBox department={ "Network"}/>
                    <ClassBox department={ "Communication"}/>
                </div>

            <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
            </div> {/* Main Div */}
        </>
    );
}

export default Page;
