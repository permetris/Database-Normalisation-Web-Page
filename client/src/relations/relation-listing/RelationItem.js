import DependencyItem from "./DependencyItem";
import PrimaryKeyItem from "./PrimaryKeyItem";

const RelationItem = (props) => {
  return (
    <div className="mb-5 card p-3 d-flex shadow">
      <div className="card mb-3">
        <div className="card-header">Attributes</div>
        <li className="list-group-item">
          {props.itemData.attributes.map((element) => element + ",")}
        </li>
      </div>
      <div className="card mb-3">
        <div className="card-header">Dependencies</div>
        <ul className="list-group-flush">
          {props.itemData.dependencies.map((dependency) => (
            <DependencyItem key={dependency.id} dependency={dependency} />
          ))}
        </ul>
      </div>
      <div className="card mb-3">
        <div className="card-header">Keys</div>
        <ul className="list-group-flush">
          {props.itemData.primaryKey.map((primaryKey) => (
            <PrimaryKeyItem key={Math.random()} primaryKey={primaryKey} />
          ))}
        </ul>
      </div>
      <div className="card mb-3">
        <div className="card-header">Third Normal Form</div>
        <ul className="list-group-flush">{props.itemData.thirdNF}</ul>
      </div>
      <div className="card">
        <div className="card-header">Boyce-Codd Normal Form</div>
        <ul className="list-group-flush">{props.itemData.boyceNF}</ul>
      </div>
    </div>
  );
};
export default RelationItem;
