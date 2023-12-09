import SideBar from './components/SideBar';

const DashboardLayout = ({ children }) => {

  return (
    <main className='flex'>

      <section className='lg:flex'>
        <SideBar />
        <div className='lg:w-[270px] w-[90px]'></div>{/* save a place for the sidebar */}
      </section>

      <div className='w-full h-full'>{children}</div>
    </main>
  );
}

export default DashboardLayout;
