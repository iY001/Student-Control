"use client"
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import Loading from './loading';

const DashboardLayout = ({ children }) => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   setTimeout(()=>{
    setLoading(false)
   } , 1000)
  }, []);

  return (
    <main className='flex'>

      <section className='lg:flex'>
      {/* {loading && <Loading />} */}
      {/* 😀 قفلته عشان كل شوية يضايقني 😀 */}
        <SideBar />
        <div className='lg:w-[270px] w-[90px] h-[100vh]'></div>{/* save a place for the sidebar */}
      </section>

      <div className='w-full h-full'>{children}</div>
    </main>
  );
}

export default DashboardLayout;
