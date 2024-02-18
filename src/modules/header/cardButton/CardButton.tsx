import { CiShoppingCart } from 'react-icons/ci';

const CardButton = () => {
  return (
    <div className="flex justify-evenly items-center w-[100%]">
      <button className="flex justify-evenly items-center bg-[#e5e5e5] hover:bg-[#adadad] transition-all w-[20%] h-[35px] rounded-[8px]">
        <h1>Card</h1>
        <CiShoppingCart />
      </button>
    </div>
  );
};

export default CardButton;
