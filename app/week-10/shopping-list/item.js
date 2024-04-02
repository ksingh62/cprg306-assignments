function Item({ id, name, quantity, category, onSelect, onDelete }) {
  return (
    <div>
      <div onClick={() => onSelect(name)}>
        <ul className="bg-slate-900 mb-4 mt-4 ml-2 container p-2 max-w-sm">
          <li className="text-xl font-bold">{name}</li>
          <li className="text-sm">
            Buy {quantity} in {category}
          </li>
        </ul>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Item;
