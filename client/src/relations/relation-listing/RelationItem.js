import DependencyItem from "./DependencyItem";
import PrimaryKeyItem from "./PrimaryKeyItem";

const RelationItem = (props) => {
  console.log(props)
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
            <PrimaryKeyItem key={Math.random()} primaryKey={primaryKey ? primaryKey: "There was no calculated key for this relation schema"} />
          ))}
           
        </ul>
      </div>
      <div className="card mb-3">
        <div className="card-header">Third Normal Form</div>
        <ul className="list-group-flush">{props.itemData.thirdNF ? props.itemData.thirdNF : "There was not third normal form calculated for this schema"}</ul>
      </div>
      <div className="card">
        <div className="card-header">Boyce-Codd Normal Form</div>
        <ul className="list-group-flush">{props.itemData.boyceNF ? props.itemData.boyceNF : "There was no boyce normal form for this relation schema"}</ul>
      </div>
    </div>
  );
};
export default RelationItem;
