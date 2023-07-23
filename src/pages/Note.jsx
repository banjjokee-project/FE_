import ListItem from 'components/List/ListItem';

const Note = () => {
  return (
    <ul>
      <h2 className="py-3 border-b border-gray-200 text-center text-[23px] font-bold">
        What I Wrote
      </h2>
      <ListItem
        title="내가 쓴 글 1"
        content="저희 레오 진짜 귀엽답니다. 저희 레오 진짜 귀엽답니다."
      />
      <ListItem
        title="내가 쓴 글 1"
        content="저희 레오 진짜 귀엽답니다. 저희 레오 진짜 귀엽답니다."
      />
    </ul>
  );
};
export default Note;
