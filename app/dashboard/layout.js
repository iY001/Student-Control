"use client"
import { useEffect, useState } from 'react';
import PrivateRoute from './PrivateRoute';
import { getCookie } from 'cookies-next';
import checkAdmin from '@/Services/auth/checkAdmin';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Loading from './loadingg';

const DashboardLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const CheckAuth = async () => {
      const token =  getCookie('token')
      const {user ,error} =  await checkAdmin(token)
      
      if(error){
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
        
        return router.push('/login')
      }

      if (user) {
        return setIsAuthenticated(true)        
      }

    }
    
    CheckAuth()
  },[])

  
  return (
    <>
    {
      // isAuthenticated ?  <PrivateRoute children={children} /> :<Loading />
      true ?  <PrivateRoute children={children} /> :<Loading />
    }
    </>
    
  );
}

export default DashboardLayout;
