const ListItem = ({ title, content }) => {
  return (
    <li className="px-12 text-sm border-b border-gray-200 py-7">
      <p className="font-bold">{title}</p>
      <p className="truncate ... w-1/2">{content}</p>
    </li>
  );
};

export default ListItem;
