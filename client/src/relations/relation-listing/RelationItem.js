import DependencyItem from "./DependencyItem";
import CalculateKey from "../../../../server/calculations/CalculateKey";
import PrimaryKeyItem from "./PrimaryKeyItem";
import calculateThirdNormalForm from "../../../../server/calculations/ThirdNormalForm";
import calculateBoyceNormalForm from "../../../../server/calculations/BoyceNormalForm";

const RelationItem = (props) => {
  props.itemData.primaryKey = CalculateKey(
    props.itemData.attributes,
    props.itemData.dependencies
  );

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
        <ul className="list-group-flush">
          {
            props.itemData.thirdNF /* {props.itemData.thirdNF.map(
          
            (el) => el.reduce((acc, letter) => acc + letter + "") + ","
          )} */
          }
        </ul>
      </div>
      <div className="card">
        <div className="card-header">Boyce-Codd Normal Form</div>
        <ul className="list-group-flush">
          {
            props.itemData.boyceNF /* {props.itemData.boyceNF.map(
            (el) => el.reduce((acc, letter) => acc + letter + "") + ","
          )} */
          }
        </ul>
      </div>
    </div>
  );
};
export default RelationItem;
