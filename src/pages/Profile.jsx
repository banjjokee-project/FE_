import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicButton from '../components/Button/BasicButton';

const Profile = () => {
  const [profileImg, setProfileImg] = useState();
  const [name, setName] = useState('김레오');
  const imgRef = useRef();
  const navigate = useNavigate();

  const imgHandler = (e) => {
    imgRef.current?.click();
  };
  const fileHandler = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        const previewImgUrl = reader.result;
        if (previewImgUrl) {
          typeof previewImgUrl !== 'string'
            ? previewImgUrl.toString()
            : setProfileImg(previewImgUrl);
        }
        console.log(profileImg);
      };
    }
  };

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex justify-center w-full px-4 pt-8">
      <div className="flex flex-col items-center w-full">
        <div className="relative w-32 h-32 mb-8 rounded-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full"></div>
          <input
            type="file"
            src={profileImg}
            ref={imgRef}
            className="absolute top-0 left-0 w-0 h-0 "
            accept="image/*"
            onChange={fileHandler}
          />
          <img
            onClick={imgHandler}
            src={profileImg}
            className="absolute top-0 left-0 w-full h-full border border-white rounded-full"
          />
        </div>

        <input
          type="text"
          value={name}
          size={name.length + 1}
          onChange={changeNameHandler}
          className="text-4xl min-w-fit focus:outline-none"
        />

        <div className="flex items-center mt-10 space-x-4">
          <p>이번 달 산책량</p>
          <div className="radial-progress" style={{ '--value': 70 }}>
            70%
          </div>
        </div>
        <div className="w-full space-y-4 mt-9">
          <BasicButton text="SCHEDULER" onClick={() => navigate('/schedule')} />
          <BasicButton
            text="WHAT I WROTE"
            bg="white"
            onClick={() => navigate('/note')}
          />
          <BasicButton text="ALARM SETTINGS" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
