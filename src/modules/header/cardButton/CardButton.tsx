import { useTranslation } from 'react-i18next';
import { CiShoppingCart } from 'react-icons/ci';
import { useAppSelector } from '../../../store/hook';
import { selectThemeState } from '../../../store/theme';

const CardButton = () => {
  const { t } = useTranslation();
  const select = useAppSelector(selectThemeState);
  const darkMode = select.theme;
  return (
    <div className="flex justify-evenly items-center w-[50%]">
      <button
        className={`flex justify-evenly items-center ${
          darkMode
            ? 'bg-gray-500 hover:bg-gray-600 transition-all'
            : 'bg-[#e5e5e5] hover:bg-[#adadad] transition-all'
        } w-[70%] h-[35px] rounded-[8px]`}
      >
        <h1>{t('card')}</h1>
        <CiShoppingCart />
      </button>
    </div>
  );
};

export default CardButton;
