import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';
import { useAppSelector } from '../../../store/hook';
import { selectThemeState } from '../../../store/theme';

const SearchBox = () => {
  const { t } = useTranslation();
  const select = useAppSelector(selectThemeState);
  const darkMode = select.theme;
  return (
    <div className="flex">
      <span className="w-fit block relative top-[12px] left-[20px]">
        <CiSearch />
      </span>
      <input
        type="text"
        className={`pl-6 border-none outline-none rounded-[8px] h-10 ${
          darkMode
            ? 'bg-gray-500 hover:bg-gray-600 focus:bg-gray-600 transition-all placeholder:text-[#362c2c]'
            : ' bg-[#e5e5e5] hover:bg-[#cbcbcb] focus:bg-[#cbcbcb] transition-all placeholder:text-[#000]'
        }   `}
        placeholder={t('search')}
      />
    </div>
  );
};

export default SearchBox;
