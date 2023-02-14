export default function List({ listItemsArray }) {
  if (!listItemsArray?.length) return null;

  return (
    <ul>
      {listItemsArray?.map((listItem, index) => (
        <li key={index}>
          <img src={`${listItem.avatar}`} alt={`${listItem.first_name}`} />
          <span>
            {listItem.first_name} {listItem.last_name}
          </span>
        </li>
      ))}
    </ul>
  );
}
