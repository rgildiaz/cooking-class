function List(props) {
  /**
   * Used by Course to display a Course entry.
   */

  // function handleClick() {
  //   props.deletion(props.id);
  // }

  return (
    <div className="course">
      <h1>{props.title}</h1>
      {/* <button onClick={handleClick}>Delete</button> */}
    </div>
  );
}

export default List;
