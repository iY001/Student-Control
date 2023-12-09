
const Box = ({ href, icon:Icon, number, name }) => {
  return (
    <section className="bg-main w-64 h-24 flex justify-start items-center gap-3 px-8 rounded-lg shadow-xl hover:-translate-y-2  duration-300  cursor-pointer ">
      <div className="bg-sec bg-opacity-70 p-2 rounded-md">
        {Icon && <Icon className="text-white text-4xl" />}
        {/* Render the icon if it's provided */}
      </div>

      <div className=" text-white">
        <h1>{number}</h1>
        <h1>{name}</h1>
      </div>
    </section>
  );
}

export default Box;
