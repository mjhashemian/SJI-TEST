import soundCloud from '../../../asset/image/soundcloud.png';
const SoundCloudComponent = () => {
  return (
    <div className="w-[100%] mt-2 h-[370px] bg-gradient-to-r rounded-[15px] from-[#ff7700] to-[#ff9940] flex flex-col justify-evenly items-center">
      <h1 className="text-[26px] font-[600]">soundCloud</h1>
      <img src={soundCloud} alt="soundCloud" />
    </div>
  );
};

export default SoundCloudComponent;
