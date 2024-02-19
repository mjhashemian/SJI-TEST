import netflix from '../../../asset/image/netflix.png';
const NetflixComponent = () => {
  return (
    <div className="w-[100%] mt-2 h-[370px] bg-gradient-to-r rounded-[15px] from-[#E50914] to-[#ff000d] flex flex-col justify-evenly items-center">
      <h1 className="text-[26px] font-[600]">netflix</h1>
      <img src={netflix} alt="netflix" />
    </div>
  );
};

export default NetflixComponent;
