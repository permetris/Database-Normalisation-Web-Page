const DependencyItem = (props) => {
  return (
    <li className="list-group-item" key={props.dependency.id}>
      {props.dependency.left.reduce((res,el)=>res = res + el)} -&gt; {"     "}
      {props.dependency.right.reduce((res,el)=>res = res + el)}
    </li>
  );
};

export default DependencyItem;
