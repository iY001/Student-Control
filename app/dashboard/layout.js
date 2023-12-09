
import SideBar from './components/SideBar';

const DashboardLayout = ({ children }) => {
  return (
    <main className='flex'>
      <SideBar />
      <div className='min-w-[260px]'></div>{/* save a place for the sidebar */}
      <div className='w-full h-full'>{ children }</div>      
    </main>
  );
}

export default DashboardLayout;
