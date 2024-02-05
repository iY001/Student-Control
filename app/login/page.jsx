"use client"
import "./style.css"
import { IoPersonOutline, IoMailOutline, IoLockClosedOutline } from 'react-icons/io5'; // Import outline icons
import Link from 'next/link';
import { useState } from "react";
import login from "@/Services/auth/login";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import {  setCookie } from "cookies-next";


const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error ,token ,user } = await login(formData)
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error
      });
    }else{
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login successfully',
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.setItem('user', JSON.stringify(user))
      setCookie('token',token)
      router.push('/dashboard');
    }
  }

  return (
    <section className="flex md:flex-row flex-col-reverse  items-center md:justify-between justify-end  h-[100vh] overflow-x-hidden">

      <section className="flex flex-col items-start h-full flex-1 p-10">
        <a href="/" className="w-[50px] h-[50px] flex items-center gap-2">
          <img src="/assets/We_logo.png" alt="logo" />
          <section>
            <h1 className="font-bold text-main">STUDENTS</h1>
            <h1 className=" font-bold  uppercase text-main">control</h1>
          </section>
        </a>

        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center gap-10 w-full h-full mt-[70px]  ">
          <h1 className="text-3xl text-main font-bold uppercase">Login</h1>


          <div className="relative w-[380px] flex items-center  gap-1  border-b border-[#dddddd63] ">
            <IoMailOutline size={20} />
            <input className="input" name="email" onChange={(e) => handleChange(e)} required type="text" />
            <label className="input-label  mx-3">Email</label>
            <span className="input-border" />
          </div>

          <div className="relative w-[380px] flex items-center  gap-1 border-b border-[#dddddd63]">
            <IoLockClosedOutline size={20} />
            <input className="input" name="password" onChange={(e) => handleChange(e)} required type="password" />
            <label className="input-label mx-3">Password</label>
            <span className="input-border" />
          </div>

          <button className="bg-main shadow-xl hover:bg-sec duration-300 text-white p-3 lg:w-[50%] w-full  rounded text-center">Log in</button>

          <h1 className="capitalize">forget your password ? <span className="text-sec text-xs cursor-pointer">conatct the admin</span></h1>

          <div className="flex items-center w-full gap-3">
            <hr className="w-full text-xl text-black " />
            <h1>or</h1>
            <hr className="w-full text-xl text-black " />
          </div>

          <Link href="/signup"><h1 className="bg-sec shadow-xl hover:bg-main duration-300 text-white p-3 px-10 w-full  rounded text-center">Sign up </h1></Link>


        </form>
      </section>

      <section className="lg:w-[50%] md:w-[40%] w-full  md:h-full h-[200px] bg-[#21458f] overflow-hidden relative">
        <img alt="" src={'/assets/pattern.png'} className="w-full h-full  object-cover scale-125" />
      </section>

    </section>

  );
}

export default Page;
