import React from 'react';

const BasicButton = ({ text = '버튼', bg = 'black', onClick }) => {
  const TYPE = {
    black: 'bg-black text-white',
    white: 'bg-white text-black border-2 border-black',
  };
  return (
    <button
      onClick={onClick}
      className={`${TYPE[bg]} text-sm font-bold rounded-md w-full h-14 py-4`}
    >
      {text}
    </button>
  );
};
export default BasicButton;
