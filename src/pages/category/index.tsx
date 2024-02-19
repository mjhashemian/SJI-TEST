import SpotifyComponent from '../../modules/category/components/Spotify';
import DinningChair from '../../modules/category/components/SoundCloud';
import YoutubeComponent from '../../modules/category/components/Youtube';
import SoundCloudComponent from '../../modules/category/components/SoundCloud';
import AppleTvComponent from '../../modules/category/components/AppleTv';
import NetflixComponent from '../../modules/category/components/Netflix';
import EpicGamesComponent from '../../modules/category/components/EpicGames';
const Categotry = () => {
  return (
    <div className="w-[95%] flex xl:flex-row flex-col gap-4 mb-10">
      <div className="xl:w-[50%] w-[100%] ">
        <YoutubeComponent />
        <div className="flex xl:flex-row flex-col justify-between gap-2">
          <SpotifyComponent />
          <SoundCloudComponent />
        </div>
      </div>
      <div className="xl:w-[50%] w-[100%]">
        <div className="flex xl:flex-row flex-col justify-between xl:gap-2">
          <AppleTvComponent />
          <NetflixComponent />
        </div>
        <div className="w-[100%]">
          <EpicGamesComponent />
        </div>
      </div>
    </div>
  );
};

export default Categotry;
