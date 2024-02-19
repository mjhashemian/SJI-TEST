import { Outlet } from 'react-router';
import Header from '../common/header';
import { useAppSelector } from '../../store/hook';
import { selectThemeState } from '../../store/theme';
import { selectDirectionState } from '../../store/languageDirection';

function Dashboard() {
  const selectTheme = useAppSelector(selectThemeState);
  const darkMode = selectTheme.theme;
  const selectDirection = useAppSelector(selectDirectionState);
  return (
    <div
      className={`${
        darkMode ? 'bg-gray-800' : 'bg-[#FFF]'
      } w-full min-h-[100%]`}
    >
      <div dir={selectDirection === 'fa' ? 'rtl' : 'ltr'} className="">
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
