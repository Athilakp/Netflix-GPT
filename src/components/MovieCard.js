import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
