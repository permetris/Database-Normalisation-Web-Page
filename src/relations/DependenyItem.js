const DependencyItem = (props) => {
  return (
    <p>
      {props.dependency.left.map((value) => value + " ")} defines:{" "}
      {props.dependency.right.map((value) => value + " ")}{" "}
    </p>
  );
};

export default DependencyItem;