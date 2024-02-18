import { CiUser } from 'react-icons/ci';

const UserCard = () => {
  return (
    <div className="flex justify-center items-center gap-2 w-[50%]">
      <div className="w-9 h-9 rounded-full bg-[#e5e5e5] hover:bg-[#adadad] transition-all flex justify-center items-center cursor-pointer">
        <CiUser />
      </div>
      <h3>Martin Geidt</h3>
    </div>
  );
};

export default UserCard;
