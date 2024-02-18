import CardButton from '../../../modules/header/cardButton/CardButton';
import SearchBox from '../../../modules/header/searchBox/SearchBox';
import SwitchButton from '../../../modules/header/switchButton/SwitchButton';
import UserCard from '../../../modules/header/useCard/UserCard';

const Header = () => {
  return (
    <div className="w-full h-[68px] flex justify-between">
      <div className="w-[30%] flex justify-center items-center">
        <SearchBox />
      </div>
      <div className="w-[30%] flex justify-center items-center">
        <SwitchButton />
      </div>
      <div className="w-[30%] flex justify-center items-center ">
        <CardButton />
        <UserCard />
      </div>
    </div>
  );
};

export default Header;
