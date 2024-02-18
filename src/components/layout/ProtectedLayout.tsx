import { Outlet } from 'react-router';
import Header from '../common/header';

function Dashboard() {
  return (
    <div className="w-full min-h-[100%] relative">
      <div className="hidden md:hidden xl:block">{/* <SideBar /> */}</div>
      <div className="mr-[0px] xl:ml-[250px]">
        <Header />
        <div
          style={{
            minHeight: 280,
            animation: 'ease-in-out',
          }}
          className="bg-[#EEF0F8] w-full min-h-[100%]"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
