function Item({ id, name, quantity, category, onSelect, onDelete }) {
  return (
    <div onClick={() => onSelect(name)} className="bg-slate-900 mb-4 mt-4 ml-2 container p-2 max-w-sm flex justify-between cursor-pointer hover:bg-slate-800">
      <div >
        <ul>
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
          className="bg-red-600 p-1 h-8 w-8 font-bold self-center active:bg-red-500"
        >
          X
        </button>
    </div>
  );
}

export default Item;
