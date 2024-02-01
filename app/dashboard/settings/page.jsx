const Page = () => {
    return (
        < >


            <div className="h-screen px-12 py-8"> {/* Content - Start */}
                <div>
                    <h1 className="uppercase font-bold text-main text-2xl mb-4">Settings</h1>
                </div> {/* Title */}
                <div className="bg-light2 px-8 py-4 w-2/4 mx-auto rounded-md border-2">
                    <section className="flex justify-between font-bold my-4">
                        <h1>Light Mode</h1>
                        <div className="relative inline-block">
                            <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-sec focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-sec" />
                        </div>
                    </section>
                    <section className="flex justify-between font-bold my-6">
                        <h1>Dark Mode</h1>
                        <div className="relative inline-block">
                            <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-sec focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-sec" />
                        </div>
                    </section>
                    <section className="flex justify-between font-bold my-4">
                        <h1>Play Sounds</h1>
                        <div className="relative inline-block">
                            <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-sec focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-sec" />
                        </div>
                    </section>
                </div>  
            </div> {/* Content - End*/}
        </ >
    );
}

export default Page;
