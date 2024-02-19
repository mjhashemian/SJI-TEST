import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';
import { useAppSelector } from '../../../store/hook';
import { selectThemeState } from '../../../store/theme';
import { selectDirectionState } from '../../../store/languageDirection';

const SearchBox = () => {
  const { t } = useTranslation();
  const select = useAppSelector(selectThemeState);
  const darkMode = select.theme;
  const selectDirection = useAppSelector(selectDirectionState);
  return (
    <div dir={selectDirection === 'fa' ? 'ltr' : 'ltr'} className="flex">
      <span className="w-fit block relative xl:top-[12px] top-2 left-[20px]">
        <CiSearch />
      </span>
      <input
        type="text"
        className={`pl-6 border-none outline-none rounded-[8px] xl:h-10 h-8 ${
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
