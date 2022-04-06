import DependencyItem from "./DependencyItem";

const RelationItem = (props) => {
  return (
    <div className="mb-5 card p-3 d-flex shadow">
      <div className="card mb-3">
        <div className="card-header">Attributes</div>
        <li className="list-group-item">
          {props.itemData.attributes.map((element) => element + ",")}
        </li>
      </div>
      <div className="card p2">
        <div className="card-header">Dependencies</div>
        <ul className="list-group-flush">
          {props.itemData.dependencies.map((dependency) => (
            <DependencyItem dependency={dependency} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RelationItem;
