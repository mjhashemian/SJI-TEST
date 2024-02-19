import youTube from '../../../asset/image/youtube.png';
const youTubeComponent = () => {
  return (
    <div className="w-full mt-2 xl:h-[250px] h-[350px] bg-gradient-to-r rounded-[15px] from-[#CD201F] to-[#ff0505] flex xl:flex-row flex-col justify-evenly items-center">
      <h1 className="text-[26px] font-[600]">youtube</h1>
      <img src={youTube} alt="youtube" />
    </div>
  );
};

export default youTubeComponent;
