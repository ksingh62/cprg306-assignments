function Item(props) {
  return (
    <>
    <ul>
        <li>Name: {props.name}</li>
        <li>Quantity: {props.quantity}</li>
        <li>Category: {props.category}</li>
    </ul>
    </>
  );
}

export default Item;
