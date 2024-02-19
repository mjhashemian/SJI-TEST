import CardButton from '../../../modules/header/cardButton/CardButton';
import Drawer from '../../../modules/header/drawer/Drawer';
import SearchBox from '../../../modules/header/searchBox/SearchBox';
import SwitchButton from '../../../modules/header/switchButton/SwitchButton';
import UserCard from '../../../modules/header/useCard/UserCard';

const Header = () => {
  return (
    <div className="w-full h-[68px] flex xl:justify-between justify-center">
      <div className="xl:w-[30%] w-[100%] flex justify-center items-center gap-2">
        <Drawer />
        <SearchBox />
      </div>
      <div className="w-[30%] hidden xl:flex justify-center items-center">
        <SwitchButton />
      </div>
      <div className="w-[30%] hidden xl:flex justify-center items-center ">
        <CardButton />
        <UserCard />
      </div>
    </div>
  );
};

export default Header;
