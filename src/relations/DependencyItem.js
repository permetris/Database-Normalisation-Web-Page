const DependencyItem = (props) => {
  return (
    <li className="list-group-item" key={props.dependency.id}>
      {props.dependency.left} -&gt; {"     "}
      {props.dependency.right}
    </li>
  );
};

export default DependencyItem;
