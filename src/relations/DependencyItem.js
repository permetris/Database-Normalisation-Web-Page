const DependencyItem = (props) => {
  return (
    <li key={props.dependency.id}>
      {props.dependency.left.map((value) => value + " ")} defines:
      {props.dependency.right.map((value) => value + " ")}
    </li>
  );
};

export default DependencyItem;
