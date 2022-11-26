function List(props) {
  function handleClick() {
    props.deletion(props.id);
  }

  return (
    <div className="year">
      <h1> Year: {props.year} </h1>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default List;
