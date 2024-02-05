import React from 'react';

import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import Loading from './loading';

const PrivateRoute = ({ children }) => {
  return (
    <main className='flex'>

      <section className='lg:flex'>
        {/* {loading && <Loading />} */}
        {/* 😀 قفلته عشان كل شوية يضايقني 😀 */}
        <SideBar />
        <div className='lg:w-[270px] w-[90px] h-[100vh]'></div>{/* save a place for the sidebar */}
      </section>

      <div className='md:w-full w-[90%] h-full'>{children}</div>
    </main>
  );
}

export default PrivateRoute;
