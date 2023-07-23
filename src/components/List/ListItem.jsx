const ListItem = ({ title, content }) => {
  return (
    <li className="w-1/3 mx-auto py-4 px-12 h-20 text-sm border-b border-gray-200 p-4">
      <p className="line text-sm font-bold pt-1">{title}</p>
      <p className="line test-sm truncate ...">{content}</p>
    </li>
  );
};

export default ListItem;
