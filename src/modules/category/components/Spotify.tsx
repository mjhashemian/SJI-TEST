import spotify from '../../../asset/image/spotify.png';
const spotifyComponent: React.FC = () => {
  return (
    <div className="w-[100%] mt-2 h-[370px] bg-gradient-to-r rounded-[15px] from-[#1db954] to-[#10fe63] flex flex-col justify-evenly items-center">
      <h1 className="text-[26px] font-[600]">spotify</h1>
      <img src={spotify} alt="soundCloud" />
    </div>
  );
};

export default spotifyComponent;
