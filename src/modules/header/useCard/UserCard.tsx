import { CiUser } from 'react-icons/ci';
import { useAppSelector } from '../../../store/hook';
import { selectThemeState } from '../../../store/theme';
import { useNavigate } from 'react-router';
import { selectUserNameState } from '../../../store/userName';

const UserCard = () => {
  const select = useAppSelector(selectThemeState);
  const darkMode = select.theme;
  const navigate = useNavigate();
  const selectUser = useAppSelector(selectUserNameState);
  return (
    <div className="flex justify-center items-center gap-2 w-[50%]">
      <div
        onClick={() => navigate('/sign-in')}
        className={`w-9 h-9 rounded-full ${
          darkMode
            ? 'bg-gray-500 hover:bg-gray-600 transition-all'
            : 'bg-[#e5e5e5] hover:bg-[#adadad] transition-all'
        } flex justify-center items-center cursor-pointer`}
      >
        <CiUser />
      </div>
      <h3 className={`${darkMode ? 'text-gray-500' : 'text-[#000]'}`}>
        {selectUser}
      </h3>
    </div>
  );
};

export default UserCard;
