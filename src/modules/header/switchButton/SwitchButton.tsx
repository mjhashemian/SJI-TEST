import { FunctionComponent } from 'react';
import './style.css';

const SwitchButton: FunctionComponent = () => {
  return (
    <div className="w-[70%] pl-1 flex xl:h-[50px] bg-[#e5e5e5] flex-row justify-center items-center rounded-[8px] auto-rows-max">
      <div className="tabs">
        <input type="radio" id="tab-waterMeter" name="tabs" />
        <label className="tab" htmlFor="tab-waterMeter">
          Dashboard
        </label>
        <input id="tab-dataLogger" type="radio" name="tabs" />
        <label className="tab " htmlFor="tab-dataLogger">
          Website
        </label>
        <span className="glider"></span>
      </div>
    </div>
  );
};

export default SwitchButton;
