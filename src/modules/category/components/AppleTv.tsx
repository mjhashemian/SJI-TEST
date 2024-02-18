import appleTv from '../../../asset/image/appleTv.png';

const AppleTvComponent = () => {
  return (
    <div className="w-[290px] mt-2 h-[370px] bg-gradient-to-r rounded-[15px] from-[#A2AAAD] to-[#eaeaea] flex flex-col justify-evenly items-center">
      <h1 className="text-[26px] font-[600]">apple TV</h1>
      <img src={appleTv} alt="appleTv" />
    </div>
  );
};

export default AppleTvComponent;
