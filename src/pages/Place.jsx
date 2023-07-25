import { useNavigate } from "react-router-dom";

const Place = ({ _id, placeName, desc, image }) => {
  const navigate = useNavigate();

  return (
    <div
      className="place-container h-1/5 hover:cursor-pointer"
      onClick={() => navigate(`/place/${_id}`)}
    >
      <div className="desc bg-slate-100 hover:bg-slate-200">
        <p className="place-name font-base mb-1 mt-1 ml-2">{placeName}</p>
        <p className="place-desc font-mm text-xs text-slate-500 ml-2">{desc}</p>
      </div>
    </div>
  );
};

export default Place;