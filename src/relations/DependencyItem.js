const DependencyItem = (props) => {
  return (
    <li className="list-group-item" key={props.dependency.id}>
      {props.left.map((value) => value + " ")} -&gt; 
      {props.dependency.right.map((value) => value + " ")}
    </li>
  );
};

export default DependencyItem;
