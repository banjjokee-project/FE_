import { useNavigate } from "react-router-dom";

const Place = ({ _id, placeName, desc, image }) => {
  const navigate = useNavigate();

  return (
    <div
      className="place-container grid grid-cols-4 h-1/5 rounded-lg py-3 hover:cursor-pointer"
      onClick={() => navigate(`/place/${_id}`)}
    >
      <div className="image col-span-1 rounded-lg bg-base-200 overflow-hidden">
      <img
          className="object-cover w-full h-full"
          src={image}
          alt={`${placeName} 대표 사진`}
        />
      </div>
      <div className="desc col-span-3 rounded-lg ml-3 bg-slate-50 hover:bg-slate-200">
        <p className="place-name font-extrabold mb-1 mt-1 ml-2">{placeName}</p>
        <p className="place-desc font-light text-xs text-slate-500 ml-2">{desc}</p>
      </div>
    </div>
  );
};

export default Place;