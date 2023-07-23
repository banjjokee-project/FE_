const InputBox = ({ title = '병원', value, onChange }) => {
  return (
    <div className="flex items-center border-2 h-14 border-black">
      <div
        className="text-white w-[80px] flex items-center text-center justify-center h-full bg-black"
        dangerouslySetInnerHTML={{
          __html: title.replace(/(?:\r\n|\r|\n)/g, '<br />'),
        }}
      ></div>
      <input
        type="text"
        value={value}
        className="ml-2 outline-none text-[18px]"
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
