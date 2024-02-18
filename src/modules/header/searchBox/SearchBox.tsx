import { CiSearch } from 'react-icons/ci';

const SearchBox = () => {
  return (
    <div className="flex">
      <span className="w-fit block relative top-[12px] left-[20px]">
        <CiSearch />
      </span>
      <input
        type="text"
        className="pl-6 border-none outline-none rounded-[8px] h-10 bg-[#e5e5e5] hover:bg-[#cbcbcb] focus:bg-[#cbcbcb] transition-all placeholder:text-[#000]"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
