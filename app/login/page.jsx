import "./style.css"
import pattern from "./pattern.png"
import Image from 'next/image';
import { IoPersonOutline, IoMailOutline, IoLockClosedOutline } from 'react-icons/io5'; // Import outline icons

const Page = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse  items-center md:justify-between justify-end  h-[100vh]">

      <section className="flex flex-col items-start h-full flex-1 p-10">
        <a href="#!" className="w-[50px] h-[50px] flex items-center gap-2">
          <img src="https://placeholder.com/50/100" alt="logo" />
          <section>
          <h1 className="font-bold">STUDENTS</h1>
          <h1 className=" font-bold  uppercase ">control</h1>
          </section>
        </a>

        <form className="flex flex-col items-center gap-10 w-full h-full mt-[70px]  ">
          <h1 className="text-3xl ">Login</h1>
          
          <div className="relative w-[380px] flex items-center  gap-1 border-b border-[#dddddd63]">
        <IoPersonOutline  size={20} />
        <input className="input" name="name" required type="text" />
        <label className="input-label mx-3">Name</label>
        <span className="input-border" />
      </div>

      <div className="relative w-[380px] flex items-center  gap-1  border-b border-[#dddddd63]">
        <IoMailOutline  size={20} />
        <input className="input" name="email" required type="text" />
        <label className="input-label mx-3">Email</label>
        <span className="input-border" />
      </div>

      <div className="relative w-[380px] flex items-center  gap-1 border-b border-[#dddddd63]">
        <IoLockClosedOutline  size={20}/>
        <input className="input" name="password" required type="password" />
        <label className="input-label mx-3">Password</label>
        <span className="input-border" />
      </div>

          <button className="bg-[#000000] text-white p-3 lg:w-[60%] w-full  rounded">Log in</button>

          <h1 className="capitalize">forget your password ? <span className="text-[#5891ff] text-xs cursor-pointer">conatct the admin</span></h1>
        </form>
      </section>

      <section className="lg:w-[50%] md:w-[40%] w-full  md:h-full h-[200px] bg-[#21458f] overflow-hidden relative">
        <Image  src={pattern}  className="w-full h-full  object-cover scale-125" />
      </section>

    </section>

  );
}

export default Page;
