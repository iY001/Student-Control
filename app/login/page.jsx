"use client"
import "./style.css"
import { IoPersonOutline, IoMailOutline, IoLockClosedOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useEffect, useState } from "react";
import login from "@/Services/auth/login";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";
import { CiUnlock } from "react-icons/ci";
import { FaUnlockAlt } from "react-icons/fa";
import checkAdmin from "@/Services/auth/checkAdmin";


const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const router = useRouter();
  const [isLogedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, token, user } = await login(formData)
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error,
        position: 'top',
        toast: true,
        timerProgressBar: true,
        timer: 2000,
        showConfirmButton: false
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login successfully',
        position: 'top',
        toast: true,
        timerProgressBar: true,
        timer: 2000,
        showConfirmButton: false
      })
      localStorage.setItem('user', JSON.stringify(user))
      setCookie('token', token)
      router.push('/dashboard');
    }
  }


  useEffect(() => {
    const CheckAuth = async () => {
      const token = getCookie('token')
      const { user, error } = await checkAdmin(token)
      if (user) {
      return setIsLoggedIn(true)  
      }else{
        return setIsLoggedIn(false)
      }
    }
    CheckAuth()
  }, [])

  return (
    <section className="flex md:flex-row flex-col-reverse  items-center md:justify-between justify-end  h-[100vh] overflow-x-hidden">

      {
        isLogedIn ? (

          <div className="flex flex-col items-start h-full flex-1 p-10">
            <a href="/" className="w-[50px] h-[50px] flex items-center gap-2">
              <img src="/assets/We_logo.png" alt="logo" />
              <section>
                <h1 className="font-bold text-main">STUDENTS</h1>
                <h1 className=" font-bold  uppercase text-main">control</h1>
              </section>
            </a>

            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="flex items-center  gap-2">
                <h1 className="text-3xl text-main font-bold">You are already logged in </h1>
                <FaUnlockAlt className="text-xl font-semibold text-main" size={30} />
              </div>

              <Link href="/dashboard" className="p-4  bg-main text-white font-bold rounded m-4 ">
                Go to dashboard
              </Link>
            </div>
          </div>
        ) :
          (
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
          )
      }

      <section className="lg:w-[50%] md:w-[40%] w-full  md:h-full h-[200px] bg-[#21458f] overflow-hidden relative">
        <img alt="" src={'/assets/s1.jpg'} className="w-full h-full  object-cover " />
      </section>

    </section>

  );
}

export default Page;
