import { FunctionComponent } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../store/hook';
import { selectThemeState } from '../../../store/theme';

const SwitchButton: FunctionComponent = () => {
  const select = useAppSelector(selectThemeState);
  const darkMode = select.theme;
  const { t } = useTranslation();
  return (
    <div
      className={`w-[70%] pl-1 flex xl:h-[50px] ${
        darkMode ? 'bg-gray-600' : 'bg-[#e5e5e5]'
      } flex-row justify-center items-center rounded-[8px] auto-rows-max`}
    >
      <div className="tabs">
        <input type="radio" id="tab-dashboard" name="tabs" />
        <label className="tab" htmlFor="tab-dashboard">
          {t('dashboard')}
        </label>
        <input id="tab-webSite" type="radio" name="tabs" />
        <label className="tab " htmlFor="tab-webSite">
          {t('webSite')}
        </label>
        <span
          className={`glider ${darkMode ? 'bg-gray-500' : 'bg-[#FFF]'} `}
        ></span>
      </div>
    </div>
  );
};

export default SwitchButton;
