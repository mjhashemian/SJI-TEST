import { Outlet } from 'react-router';
import Header from '../common/header';
import { useAppSelector } from '../../store/hook';
import { selectThemeState } from '../../store/theme';
// import SideBar from '../common/sideBar';

function Dashboard() {
  const selectTheme = useAppSelector(selectThemeState);
  const darkMode = selectTheme.theme;
  console.log('====================================');
  console.log(darkMode);
  console.log('====================================');
  return (
    <div
      className={`${
        darkMode ? 'bg-gray-800' : 'bg-[#FFF]'
      } w-full min-h-[100%]`}
    >
      <div className="">
        <Header />
        <div
          style={{
            minHeight: 280,
            animation: 'ease-in-out',
          }}
          className="w-full min-h-[100%] flex justify-center "
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
