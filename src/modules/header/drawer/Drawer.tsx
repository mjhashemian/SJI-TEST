import React, { useEffect, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../../store/theme';
import { useTranslation } from 'react-i18next';
import { setDirection } from '../../../store/languageDirection';

const Drawer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('en');
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme(darkMode));
  }, [darkMode]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleChange = (event: { target: { value: string } }) => {
    setSelectedValue(event.target.value);
    dispatch(setDirection(selectedValue));
    i18n.changeLanguage(selectedValue);
  };

  return (
    <div>
      <button
        onClick={showDrawer}
        className={`${
          darkMode
            ? 'bg-gray-500 text-gray-300 hover:bg-gray-600 focus:bg-gray-600'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300 focus:bg-gray-300'
        }  rounded-full w-8 h-8 flex justify-center items-center focus:outline-none`}
      >
        <IoSettingsOutline />
      </button>
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 transition-opacity ${
          visible ? 'visible' : 'invisible'
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 w-64 z-50 p-4 shadow transition-transform ${
          visible ? 'translate-x-0' : '-translate-x-full'
        } ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
        style={{ transitionDuration: '500ms' }}
      >
        <button onClick={onClose} className="absolute top-0 right-0 p-2">
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">{t('setting')}</h2>
        <div className="mb-4">
          <p className="text-gray-700">{t('darkMode')} :</p>
          <label
            className="flex w-fit items-center mt-2 cursor-pointer"
            htmlFor="darkModeSwitch"
          >
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only"
              id="darkModeSwitch"
            />
            <div className="relative">
              <div
                className={`block bg-gray-300 w-16 border-[#000] border-[1px] h-8 rounded-full ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              ></div>
              <div
                className={`absolute top-0 left-0 w-8 h-8 rounded-full flex justify-center items-center transition-transform ${
                  darkMode ? 'translate-x-full' : 'translate-x-0'
                }`}
              >
                {darkMode ? '🌙' : '☀️'}
              </div>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 ">{t('language')} :</p>
          <select
            className={`${
              darkMode ? 'bg-gray-800 text-[#FFF]' : 'bg-[#FFF]'
            } block w-full mt-2 border border-gray-300 rounded py-2 px-3 text-gray-700`}
            value={selectedValue}
            defaultChecked={true}
            onChange={handleChange}
          >
            <option value="fa">English</option>
            <option value="en">فارسی</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
