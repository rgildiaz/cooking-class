function List(props) {
  /**
   * Used by Course to display a Course entry.
   */

  // function handleClick() {
  //   props.deletion(props.id);
  // }

  const courseStyles = {
    margin: "1em",
    width: "80%",
    textAlign: "left",
    padding: "1em",
    backgroundColor: "#ececec",
    borderRadius: "10px"
  };

  return (
    <div className="course" style={{ ...courseStyles }}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      {/* <button onClick={handleClick}>Delete</button> */}
    </div>
  );
}

export default List;
