import SpotifyComponent from '../../modules/category/components/Spotify';
import DinningChair from '../../modules/category/components/SoundCloud';
import YoutubeComponent from '../../modules/category/components/Youtube';
import SoundCloudComponent from '../../modules/category/components/SoundCloud';
import AppleTvComponent from '../../modules/category/components/AppleTv';
import NetflixComponent from '../../modules/category/components/Netflix'
import EpicGamesComponent from '../../modules/category/components/EpicGames';
const Categotry = () => {
  return (
    <div className="w-[95%] flex gap-4 mb-10">
      <div className="w-[50%]">
        <YoutubeComponent />
        <div className="flex justify-between">
          <SpotifyComponent />
          <SoundCloudComponent />
        </div>
      </div>
      <div className=" w-[50%]">
        <div className="flex justify-between">
          <AppleTvComponent />
          <NetflixComponent />
        </div>
        <div className="w-[100%]">
          <EpicGamesComponent/>
        </div>
      </div>
    </div>
  );
};

export default Categotry;
