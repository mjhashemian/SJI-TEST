import epicGame from '../../../asset/image/epicGames.png';
const EpicGamesComponent = () => {
  return (
    <div className="w-full mt-2 xl:h-[250px] h-[350px] bg-gradient-to-r rounded-[15px] from-[#0c66e9] to-[#78aeff] flex xl:flex-row flex-col justify-evenly items-center">
      <h1 className="text-[26px] font-[600]">Epic Games</h1>
      <img src={epicGame} className="w-[200px]" alt="epic games" />
    </div>
  );
};

export default EpicGamesComponent;
